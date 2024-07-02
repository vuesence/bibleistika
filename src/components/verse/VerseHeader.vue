<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import VerseSelectionDialog from "@/components/verse-selection-dialog/VerseSelectionDialog.vue";
import { chapterAndVerseId, getBookName, nextVerseId, prevVerseId }
  from "@/utils/bibleUtils";
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

    <BaseButton class="prev nav-button" aria-label="Предыдущая глава" @click="go('prev')">
      <BaseIcon size="20" name="prev" class="icon" fill1="currentColor" />
    </BaseButton>
    <BaseButton class="next nav-button" aria-label="Следующая глава" @click="go('next')">
      <BaseIcon size="20" name="next" class="icon" fill1="currentColor" />
    </BaseButton>
  </div>
</template>

<style scoped>
.verse-header {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  .open-verse-selection {
    /* border: 0; */
    border-radius: 3px;
    /* border-color: var(--bbl-c-border); */
    padding: 0 1em;
    cursor: pointer;
    h2 {
      margin: 5px;
    }
  }
  .nav-button {
    height: 1.5em;
    width: 5em;
    margin-left: 1.5em;
    padding: 0 1em;
    color: var(--bbl-c-text-3);
    .icon {
      margin: 0 auto;;
    }
  }
}
</style>
