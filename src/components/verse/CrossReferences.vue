<script setup lang="ts">
import { onMounted, ref } from "vue";
import VerseComponent from "./VerseComponent.vue";
import { api } from "@/services/api";
// import type { PropType } from "vue";
import { buildVerseFromString } from "@/composables/useVerseUtils";
import { useAppLoader } from "@/composables/useAppLoader";

const props = defineProps({
  vid: String,
});

const verse = ref();
const { startLoading, stopLoading } = useAppLoader();

onMounted(async () => {
  startLoading();
  const data = await api.bible.loadVerse(props.vid);
  verse.value = buildVerseFromString(props.vid, data.translations[1].tokens);
  console.log(verse.value);

  stopLoading();
});
</script>

<template>
  CrossReferences
  <!-- <VerseComponent :verse="verse" class="cross-references" /> -->
</template>

<style scoped>
.masoretic-text :deep(.token > .lemma) {
  display: none;
}
</style>
