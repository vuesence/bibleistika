<script setup lang="ts">
// import { useRoute } from "vue-router";
// import { useVerseUtils } from "../utils/verseUtils";
import SearchPanel from "@/components/SearchPanel.vue";
import SearchResults from "@/components/SearchResults.vue";
// import { useStrongsConcordance } from "@/composables/useStrongsConcordance";
import OneColumnLayout from "@/layouts/OneColumnLayout.vue";

defineProps({
  searchString: {
    type: String,
    default: null,
  },
  // sn: {
  //   type: String,
  //   // default: "1:1:1",
  // },
  // mode: {
  //   type: String,
  //   default: "",
  // },
});

// const showOccurrences = ref(false);
// const route = useRoute();

// watch(() => route.name, () => {
//   showOccurrences.value = false;
// });
</script>

<template>
  <OneColumnLayout>
    <SearchPanel />
    <SearchResults v-if="searchString" :search-string="searchString" />
  </OneColumnLayout>
</template>

<style scoped>

</style>
