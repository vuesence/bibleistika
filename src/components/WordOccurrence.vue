<script setup lang="ts">
import { defineProps } from "vue";
import { getSC } from "@/composables/useStrongsConcordance";

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div v-if="props.sn" class="word-desc">
    <p class="desc" v-html="getSC(props.sn).desc">
    </p>
  </div>
</template>

<style lang="scss" scoped>
.desc {
  // white-space: pre;
}
</style>
