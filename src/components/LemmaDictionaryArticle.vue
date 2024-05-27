<script setup lang="ts">
import { ref, watch } from "vue";
import { api } from "../services/api";

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
  dict: {
    type: String,
    default: "bdb",
  },
});

const data = ref("");
const title = ref("");

watch(() => props.dict, async () => {
  if (props.dict === "bdb") {
    data.value = await api.bible.loadBdbDict(props.sn);
    title.value = "Brown–Driver–Briggs a Hebrew and English Lexicon";
  } else if (props.dict === "gesenius") {
    data.value = await api.bible.loadGeseniusDict(props.sn);
    title.value = "Hebrew and Chaldee Gesenius Lexicon";
  }
}, { immediate: true });

// onMounted(async () => {

// });
</script>

<template>
  <article>
    <h2>{{ title }}</h2>
    <div v-if="props.sn" class="dict" v-html="data" />
  </article>
</template>

<style scoped>
article {
  color: var(--vwa-c-text-2);
}
</style>
