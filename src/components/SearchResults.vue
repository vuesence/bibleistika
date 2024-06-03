<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { loadSearchResults } from "../composables/useVerseUtils";
import VerseList from "./VerseList.vue";
import { useAppLoader } from "@/composables/useAppLoader";

const props = defineProps({
  searchString: {
    type: String,
    default: null,
  },
  // searchMode: {
  //   type: String,
  //   default: null,
  // },
});

const { startLoading, stopLoading } = useAppLoader();

const verses = ref([]);
// const page = ref(1);
// const pageSize = ref(5);

watch(() => props.searchString, async () => {
  if (props.searchString) {
    startLoading();
    verses.value = await loadSearchResults(props.searchString);
    stopLoading();
  }
}, { immediate: true });

// onMounted(async () => {
//   startLoading();
//   verses.value = await loadSearchResults(props.searchString);
//   stopLoading();
// });
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
