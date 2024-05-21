<script setup lang="ts">
// import { computed, onMounted, ref, watch } from "vue";
// import WordOccurrence from "../components/WordOccurrence.vue";
import VerseHeader from "../components/VerseHeader.vue";
import WordDescription from "../components/WordDescription.vue";
import VerseToken from "../components/VerseToken.vue";
import { useVerseUtils } from "../composables/useVerseUtils";
import { router } from "@/router";
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

function displayWord(sn: string) {
  router.push({ name: "verse-word", params: { vid: props.vid, sn } });
}
</script>

<template>
  <div>
    <VerseHeader :vid="props.vid" />

    <div v-if="verse" class="verse">
      <VerseToken
        v-for="(token, index) in verse.tokens"
        :key="index"
        :token="token" @click="displayWord(token.sn)"
      />
    </div>

    <Transition mode="out-in">
      <WordDescription v-if="props.sn" :key="props.sn" :sc="sc" class="word-desc" />
    </Transition>

    <!-- <Transition mode="out-in">
      <WordOccurrence v-if="props.sn" :key="props.sn" :sn="props.sn" class="occurrence" />
    </Transition> -->
  </div>
</template>

<style scoped>
.verse {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2em;
}

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
