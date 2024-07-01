<script setup lang="ts">
import { onMounted, ref } from "vue";
import VerseComponent from "./VerseComponent.vue";
// import { api } from "@/services/api";
// import type { PropType } from "vue";
import { loadVerse } from "@/utils/verseOriginUtils";

const props = defineProps({
  vid: String,
});

const verse = ref();

onMounted(async () => {
  verse.value = await loadVerse(props.vid);
  console.log(verse.value);
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
