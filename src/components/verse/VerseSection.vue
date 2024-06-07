<script setup lang="ts">
import type { PropType } from "vue";
import VerseHeader from "./VerseHeader.vue";
import VerseComponent from "./VerseComponent.vue";

const props = defineProps({
  vid: {
    type: String,
  },
  verse: {
    type: Object as PropType<Verse>,
    default: null,
  },
});
</script>

<template>
  <VerseHeader :vid="props.vid" />
  <VerseComponent :vid="props.vid" :verse="verse" />
</template>

<style scoped>
</style>
