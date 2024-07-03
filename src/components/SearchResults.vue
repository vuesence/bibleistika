<script setup lang="ts">
import { ref, watch } from "vue";
import { api } from "../services/api";
import VerseList from "./verse/VerseList.vue";
import { buildVerses } from "@/utils/verseUtils";

const props = defineProps({
  searchString: {
    type: String,
    default: null,
  },
});

const verses = ref([]);

watch(() => props.searchString, async () => {
  if (props.searchString) {
    verses.value = buildVerses(await api.bible.loadSearchResults(props.searchString));
  }
}, { immediate: true });
</script>

<template>
  <div v-if="props.searchString" class="search-results">
    <h2>Поиск по: <span>"{{ searchString }}"</span></h2>
    <VerseList :verses="verses" />
  </div>
  <!-- </div> -->
</template>

<style scoped>
.search-results {
  margin-top: 1em;
  h2 {
    span {
      font-style: italic;
    }
  }
}
</style>
