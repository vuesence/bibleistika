<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import WordOccurrence from "../components/WordOccurrence.vue";
import VerseTitle from "../components/VerseTitle.vue";
import VerseText from "../components/VerseText.vue";
import WordDescription from "../components/WordDescription.vue";
import { useVerseUtils } from "../composables/useVerseUtils";
import { useStrongsConcordance } from "@/composables/useStrongsConcordance";

const props = defineProps({
  vid: {
    type: String,
    default: "1:1:1",
  },
  sn: {
    type: String,
    // default: "1:1:1",
  },
  mode: {
    type: String,
    default: "",
  },
});

const { verse } = useVerseUtils(props);
const { sc } = useStrongsConcordance(props);
const showOccurrences = ref(false);

const route = useRoute();

watch(() => route.name, () => {
  showOccurrences.value = false;
});
</script>

<template>
  <div class="layout">
    <div class="verse-container">
      <VerseTitle :vid="props.vid" />
      <VerseText :vid="props.vid" :verse="verse" />
    </div>

    <Transition mode="out-in">
      <WordDescription
        v-if="props.sn"
        :key="props.sn"
        :sc="sc"
        class="word-desc"
      />
    </Transition>

    <!-- <div class="show-occurrences-button"> -->
    <!-- <button
      v-if="props.sn"
      class="show-occurrences-link"
      @click="showOccurrences = !showOccurrences"
    >
      Show occurrences
    </button> -->
    <!-- </div> -->

    <Transition mode="out-in">
      <WordOccurrence
        v-if="props.mode === '1'"
        v-bind="props"
        class="word-occurrences"
      />
    </Transition>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.verse-container {
  grid-column: 1 / 5;
  grid-row: 1;
  border: 1px solid gray;
}

.word-desc {
  /* margin-top: 2em; */
  grid-column: 5 / 7;
  grid-row: 1 / 3;
  border: 1px solid gray;
}

.word-occurrences {
  grid-column: 1 / 5;
  grid-row: 2;
  border: 1px solid gray;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
