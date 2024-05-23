<script setup lang="ts">
import { ref } from "vue";
// import { chapterAndVerseId, getBookName, nextVerseId, prevVerseId }
//   from "@/models/bible-helpers";
import VerseSelectionDialogBook from "./VerseSelectionDialogBook.vue";
import VerseSelectionDialogChapter from "./VerseSelectionDialogChapter.vue";
import VerseSelectionDialogVerse from "./VerseSelectionDialogVerse.vue";
import { router } from "@/router";

defineProps({
  vid: {
    type: String,
    default: null,
  },
});

const step = ref(0);
const dialog = ref<HTMLDialogElement>(null!);

defineExpose({ showModal });

function showModal() {
  step.value = 0;
  dialog.value.showModal();
}

const book = ref(1);
const chapter = ref(1);

function goToVerse(verse) {
  router.push(
    { name: "verse", params: { vid: `${book.value}:${chapter.value}:${verse}` } },
  );
  dialog.value.close();
}
</script>

<template>
  <dialog ref="dialog" class="verse-selection">
    <Transition mode="out-in">
      <VerseSelectionDialogBook
        v-if="step === 0"
        @next="book = $event; step = 1"
      />
      <VerseSelectionDialogChapter
        v-else-if="step === 1"
        :book="book"
        @next="chapter = $event; step = 2"
      />
      <VerseSelectionDialogVerse
        v-else-if="step === 2"
        :book="book"
        :chapter="chapter"
        @next="goToVerse($event)"
      />
    </Transition>
    <button type="submit" aria-label="close" class="close-button" @click="dialog.close()">
      ✖
    </button>
  </dialog>
</template>

<style scoped>
.verse-selection[open] {
  display: flex;
  flex-direction: column;

  .close-button {
    position: absolute;
    right: 0.8em;
    top: 0.8em;
    font-size: 1.5em;
    color: var(--vwa-c-text-3);
    border: 0;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
