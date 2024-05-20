<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import WordOccurrence from "../components/WordOccurrence.vue";
import VerseHeader from "../components/VerseHeader.vue";
import WordDescription from "../components/WordDescription.vue";
import VerseToken from "../components/VerseToken.vue";
import type { Verse } from "@/models/Verse";
import { getVerse } from "@/models/VerseLibrary";
import { router } from "@/router";
// import verses from "@/services/api/verses";

const props = defineProps({
  vid: {
    type: String,
    default: "1:1:1",
  },
  // showVerse: {
  //   type: Boolean,
  //   default: true
  // },
  sn: {
    type: String,
    // default: "1:1:1",
  },
});
console.debug("VerseView props:", props);

// const verse = ref();
const verse = ref<Verse>();
watch(
  () => props.vid,
  async (newVid) => {
    verse.value = await getVerse(newVid);
  },
  { immediate: true },
);

function displayWord(sn: string) {
  router.push({ name: "verse-word", params: { vid: props.vid, sn } });
}

// onMounted(async () => {
// });
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
      <WordDescription v-if="props.sn" :key="props.sn" :sn="props.sn" class="word-desc" />
    </Transition>

    <Transition mode="out-in">
      <WordOccurrence v-if="props.sn" :key="props.sn" :sn="props.sn" class="occurrence" />
    </Transition>
    <!-- <router-view /> -->
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
