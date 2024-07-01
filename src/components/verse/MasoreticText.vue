<script setup lang="ts">
import { onMounted, ref } from "vue";
import VerseComponent from "./VerseComponent.vue";
// import { api } from "@/services/api";
// import type { PropType } from "vue";
import { loadVerse } from "@/utils/verseOriginUtils";
import { useAppLoader } from "@/composables/useAppLoader";

const props = defineProps({
  vid: String,
});

const verse = ref();
const { startLoading, stopLoading } = useAppLoader();

onMounted(async () => {
  startLoading();
  // const data = await api.bible.loadVerseOriginText(props.vid);
  // const [bookId] = props.vid.split(":");
  // verse.value = buildVerseFromString(props.vid, data.data, +bookId < 40 ? "H" : "G");
  verse.value = await loadVerse(props.vid);
  console.log(verse.value);

  stopLoading();
});
</script>

<template>
  <VerseComponent :verse="verse" class="masoretic-text no-tooltip" />
</template>

<style scoped>
.masoretic-text :deep(.token > .lemma) {
  display: none;
}
</style>
