<script setup lang="ts">
// import { defineProps } from "vue";
// import { StrongsConcordance } from "../models/StrongsConcordance";
import { router } from "@/router";

defineProps({
  sc: {
    type: Object as () => StrongsConcordance,
    default: null,
  },
});

function showOccurrences() {
  router.push({
    name: "verse-word-occurrences",
    params: {
      vid: router.currentRoute.value.query.vid,
      sn: router.currentRoute.value.query.sn,
      mode: 1,
    },
  });
}
</script>

<template>
  <div class="wrapper">
    <div v-if="sc" class="word-desc">
      <p class="desc" v-html="sc.desc">
      </p>
      <button class="show-occurrences-link" @click="showOccurrences()">
        Show occurrences
      </button>
    </div>
  </div>
</template>

<style scoped>
.word-desc {
  margin-left: 2em;

  .show-occurrences-link {
    grid-column: 1 / 5;
    grid-row: 2;
    /* border: 1px solid pink; */
    border: 0;
    color: var(--vwa-c-text-2);
    transition: all 0.3s ease;

    &:hover {
      color: var(--vwa-c-text-1);
    }
  }
}
</style>
