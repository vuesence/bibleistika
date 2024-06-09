<script setup lang="ts">
import { onMounted, ref } from "vue";
// import type { PropType } from "vue";
import VerseComponent from "./VerseComponent.vue";
import { loadVerse } from "@/composables/useVerseUtils";

const props = defineProps({
  vid: String,
});

const verse = ref();

onMounted(async () => {
  verse.value = await loadVerse(props.vid);
});
</script>

<template>
  <div v-if="verse">
    hey
    <VerseComponent :verse="verse" />
  </div>
</template>

<style scoped>
</style>
