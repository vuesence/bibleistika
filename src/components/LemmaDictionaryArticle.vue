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
    title.value = "Brown–Driver–Briggs a Hebrew and English Lexicon";
  } else if (props.dict === "gesenius") {
    title.value = "Hebrew and Chaldee Gesenius Lexicon";
  }
  data.value = await api.bible.loadDict(props.sn, props.dict);
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
  color: var(--bbl-c-text-2);
}
</style>
