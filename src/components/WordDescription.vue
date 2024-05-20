<script setup lang="ts">
import { defineProps } from "vue";
import SCDict from "../models/StrongsConcordanceDict";

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="word-desc">
      <p class="desc" v-html="SCDict.get(props.sn).desc">
      </p>
    </div>
  </div>
</template>

<style scoped>
/* .desc {
  // white-space: pre;
} */
</style>
