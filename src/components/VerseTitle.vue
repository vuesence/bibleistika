<script setup lang="ts">
// import { computed } from "vue";
import { chapterAndVerseId, getBookName, nextVerseId, prevVerseId }
  from "@/models/bible-helpers";
import { router } from "@/router";

const props = defineProps({
  vid: {
    type: String,
    default: null,
  },
});

function go(direction: string) {
  if (direction === "next") {
    router.push({ name: "verse", params: { vid: nextVerseId(props.vid) } });
  } else {
    router.push({ name: "verse", params: { vid: prevVerseId(props.vid) } });
  }
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
