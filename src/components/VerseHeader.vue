<script setup lang="ts">
// import { computed } from "vue";
import { chapterAndVerseId, parseVerseId } from "@/models/bible-helpers";
import { router } from "@/router";
import { getBookName, nextVerseId, prevVerseId } from "@/models/bible-helpers";

const props = defineProps({
  vid: {
    type: String,
    default: null,
  },
});

// const chapterAndVerseId
// = computed(() => props.vid ? props.vid.split(":").slice(1).join(":") : null);

function go(direction: string) {
  if (direction === "next") {
    router.push({ name: "verse", params: { vid: nextVerseId(props.vid) } });
  } else {
    router.push({ name: "verse", params: { vid: prevVerseId(props.vid) } });
  }
  // const verseId = parseVerseId(props.vid);
  // const newVerseId
  //   = `${verseId.bookId}:${verseId.chapterId}:
  //     ${+verseId.verseId + (direction === "next" ? 1 : -1)}`;
  // router.push({ name: "verse", params: { vid: newVerseId } });
}
</script>

<template>
  <div class="verse-header">
    <h2>{{ getBookName(props.vid) }} {{ chapterAndVerseId(props.vid) }} </h2>
    <button class="prev nav-button" @click="go('prev')">
      Prev
    </button>
    <button class="next nav-button" @click="go('next')">
      Next
    </button>
  </div>
</template>

<style scoped>
.verse-header {
  display: flex;
  align-items: center;
}

.nav-button {
  height: 2em;
  margin-left: 1.5em;
  padding: 0 1em;
}
</style>
