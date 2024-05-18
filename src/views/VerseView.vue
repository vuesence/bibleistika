<script setup lang="ts">
import WordDescription from '../components/WordDescription.vue'
import VerseToken from '../components/VerseToken.vue'
import { ref, onMounted } from "vue";
import { getVerse } from "@/bible/verses";
import { router } from '@/router';
import { parseVerseId } from "@/utils/verses";
import { books } from "@/bible/books";
// import verses from "@/services/api/verses";

const props = defineProps({
  id: {
    type: String,
    default: "1-1-1"
  },
  sn: {
    type: String,
    // default: "1-1-1"
  },
});



// const text = ref("");
const verse = ref<Verse>();

function displayWord(sn: string) {
  router.push({ name: 'verse-word', params: { id: props.id, sn } })
}

onMounted(async () => {
  verse.value = await getVerse(props.id);
  console.log(props);

  // text.value = await verses.get([props.bookId, props.chapterId, props.verseId].join("-"));
})
</script>
<template>
  <div>
    <h2>Синодальный текст / {{ books[parseVerseId(props.id).bookId] }} 1: 1 </h2>
    <!-- <p>
      {{ verse.tokens }}
    </p> -->

    <div class="verse" v-if="verse">
      <VerseToken v-for="(token, index) in verse.tokens" :key="index" :token="token" @click="displayWord(token.sn)" />
    </div>

    <Transition mode="out-in">
      <WordDescription :sn="props.sn" class="word-desc" :key="props.sn" />
    </Transition>

    <Transition mode="out-in">
      <WordOccurrence :sn="props.sn" class="word-desc" :key="props.sn" />
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
