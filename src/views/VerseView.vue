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
  <div>
    <VerseTitle :vid="props.vid" />
    <VerseText :vid="props.vid" :verse="verse" />

    <Transition mode="out-in">
      <WordDescription v-if="props.sn" :key="props.sn" :sc="sc" class="word-desc" />
    </Transition>

    <!-- <div class="show-occurrences-button"> -->
    <button
      v-if="props.sn"
      class="show-occurrences"
      @click="showOccurrences = !showOccurrences"
    >
      Show occurrences
    </button>
    <!-- </div> -->

    <Transition mode="out-in">
      <WordOccurrence v-if="showOccurrences" :sn="props.sn" />
    </Transition>
  </div>
</template>

<style scoped>
.word-desc {
  margin-top: 2em;
}

.show-occurrences {
  border: 0;
  color: var(--vwa-c-text-2);
  transition: all 0.3s ease;
  &:hover {
    color: var(--vwa-c-text-1);
  }
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
