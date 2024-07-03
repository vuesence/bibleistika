<script setup lang="ts">
import SearchPanel from "@/components/SearchPanel.vue";
import SearchResults from "@/components/SearchResults.vue";
import OneColumnLayout from "@/layouts/OneColumnLayout.vue";

defineProps({
  searchString: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <OneColumnLayout>
    <h2>Поиск</h2>
    <SearchPanel />
    <SearchResults v-if="searchString" :search-string="searchString" />
  </OneColumnLayout>
</template>

<style scoped>
h2 {
  margin-top: 0;
  text-align: center;
}
</style>
