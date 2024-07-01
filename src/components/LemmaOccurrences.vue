<script setup lang="ts">
import { onMounted, ref } from "vue";
import { api } from "../services/api";
import VerseList from "./verse/VerseList.vue";

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
});

const verses = ref([]);

onMounted(async () => {
  verses.value = await api.bible.loadLemmaOccurrences(props.sn);
});
</script>

<template>
  <div v-if="props.sn" class="lemma-occurrences">
    <h2>Все вхождения леммы {{ props.sn }}</h2>
    <VerseList :verses="verses" :sn="props.sn" />
  </div>
  <!-- </div> -->
</template>

<style scoped>
.lemma-occurrences {
  margin-top: 1em;
}
</style>
