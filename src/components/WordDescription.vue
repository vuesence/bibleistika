<script setup lang="ts">
import { defineProps } from "vue";
// import { StrongsConcordance } from "../models/StrongsConcordance";

const props = defineProps({
  sc: {
    type: Object as () => StrongsConcordance,
    default: null,
  },
});
</script>

<template>
  <div class="wrapper">
    <div v-if="sc" class="word-desc">
      <p class="desc" v-html="sc.desc">
      </p>
    </div>
  </div>
</template>

<style scoped>
/* .desc {
  // white-space: pre;
} */
</style>
