<script setup lang="ts">
import { ref } from "vue";
import VerseSelectionDialogBook from "./VerseSelectionDialogBook.vue";
// import VerseSelectionDialogChapter from "./VerseSelectionDialogChapter.vue";
import VerseSelectionDialogList from "./VerseSelectionDialogList.vue";
import { router } from "@/router";
import { books } from "@/utils/bibleUtils";

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

let book = 1;
// const book = ref(1);
let chapter = 1;
// const chapter = ref(1);

function onClick($event) {
  if ($event.target === dialog.value
    || $event.target === dialog.value.querySelector(".close-button")
  ) {
    step.value = 0;
    dialog.value.close();
  }
}

const steps = [
  {
    comp: VerseSelectionDialogBook,
    size: () => 0,
    next: (ev: number) => {
      book = ev;
      chapter = 0;
      step.value = 1;
    },
  },
  {
    comp: VerseSelectionDialogList,
    size: () => books[+book - 1].chapters.length,
    next: (ev: number) => {
      chapter = ev;
      step.value = 2;
    },
  },
  {
    comp: VerseSelectionDialogList,
    size: () => books[+book - 1].chapters[chapter - 1],
    next: (ev: number) => {
      router.push(
        { name: "verse", params: { vid: `${book}:${chapter}:${ev}` } },
      );
      dialog.value.close();
      step.value = 0;
    },
  },
];
</script>

<template>
  <dialog ref="dialog" role="textbox" tabindex="0" class="verse-selection" @click="onClick" @keydown="() => {}">
    <Transition mode="out-in">
      <component
        :is="steps[step].comp"
        :size="steps[step].size()"
        :book="book"
        :chapter="chapter"
        @next="steps[step].next($event)"
      />
    </Transition>
    <button aria-label="close" class="close-button">
      ✖
    </button>
  </dialog>
</template>

<style scoped>
.verse-selection[open] {
  display: flex;
  flex-direction: column;
  border-color: var(--bbl-c-text-3);

  .close-button {
    position: absolute;
    right: 0.8em;
    top: 0.8em;
    font-size: 1.5em;
    border: 0;
    color: var(--bbl-c-text-3);
    transition: color 0.3s ease;
    &:hover {
      color: var(--bbl-c-text-2);
    }
  }
}
</style>
