<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
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
</script>

<template>
  <div>
    <VerseTitle :vid="props.vid" />
    <VerseText :vid="props.vid" :verse="verse" />

    <Transition mode="out-in">
      <WordDescription v-if="props.sn" :key="props.sn" :sc="sc" class="word-desc" />
    </Transition>

    <div class="verse">
      <button
        class="show-occurrences"
        @click="showOccurrences = !showOccurrences"
      >
        Show Occurrences
      </button>
    </div>

    <Transition mode="out-in">
      <WordOccurrence v-if="showOccurrences" :sn="props.sn" class="occurrence" />
    </Transition>
  </div>
</template>

<style scoped>
.word-desc {
  margin-top: 2em;
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
