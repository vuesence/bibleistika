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

const steps = [
  {
    comp: VerseSelectionDialogBook,
    next: (ev: number) => {
      book.value = ev;
      step.value = 1;
    },
  },
  {
    comp: VerseSelectionDialogChapter,
    next: (ev: number) => {
      chapter.value = ev;
      step.value = 2;
    },
  },
  {
    comp: VerseSelectionDialogVerse,
    next: (ev: number) => {
      router.push(
        { name: "verse", params: { vid: `${book.value}:${chapter.value}:${ev}` } },
      );
      dialog.value.close();
      step.value = 0;
    },
  },
];
</script>

<template>
  <dialog ref="dialog" class="verse-selection">
    <Transition mode="out-in">
      <component
        :is="steps[step].comp"
        :book="book"
        :chapter="chapter"
        @next="steps[step].next($event)"
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
  border-color: var(--vwa-c-text-3);

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
