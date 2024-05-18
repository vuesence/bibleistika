<script setup lang="ts">
import { defineProps } from "vue";
import { getStrongsConcordance } from "../bible/strongs-concordance";
// import type { Token } from "@/index.d";

// interface Token {
//   tn: string;
//   sn?: string;
// }

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
});

</script>

<template>
  <div class="word-desc" v-if="props.sn">
    <!-- <div class="token">
      hello wd - {{ props.sn }}
    </div> -->
    <p class="desc" v-html="getStrongsConcordance(props.sn).desc">
    </p>
  </div>
</template>

<style lang="scss" scoped>
.desc {
  // white-space: pre;
}
</style>
