<script setup lang="ts">
import { ref } from "vue";
import VerseSelectionDialog from "./verse-selection-dialog/VerseSelectionDialog.vue";
import { chapterAndVerseId, getBookName, nextVerseId, prevVerseId }
  from "@/models/bible-helpers";
import { router } from "@/router";

const props = defineProps({
  vid: {
    type: String,
    default: null,
  },
});

const dialog = ref<HTMLDialogElement>(null!);

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
    <button class="open-verse-selection" @click="dialog.showModal()">
      <h2>{{ getBookName(props.vid) }} {{ chapterAndVerseId(props.vid) }} </h2>
    </button>
    <VerseSelectionDialog ref="dialog" />

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
  .open-verse-selection {
    border: 0;
    cursor: pointer;
  }
}

.nav-button {
  height: 2em;
  margin-left: 1.5em;
  padding: 0 1em;
}
</style>
