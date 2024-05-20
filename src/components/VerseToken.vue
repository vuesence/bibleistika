<script setup lang="ts">
// import type { PropType } from 'vue'
import { defineProps } from "vue";
import { VerseToken } from "@/models/VerseToken";

// interface Token {
//   tn: string;
//   sn?: string;
// }

const props = defineProps({
  token: {
    type: VerseToken,
    required: true,
  },
});
</script>

<template>
  <div class="token">
    <span class="text">
      {{ props.token.tr ?? 'nbsp' }}
    </span>
    <span v-if="props.token.sn" class="strongs-number">
      {{ props.token.sn }}
    </span>
    <span class="original-text">
      {{ props.token.ow }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.token {
  // display: inline;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;

  &:has(.strongs-number) {
    cursor: pointer;
  }

  &:has(.strongs-number) {
    &:hover {
      opacity: 0.8;
      background: #fafafa;
      border-right-color: #eee;
      border-left-color: #eee;
    }
  }

  .text {
    min-width: 0.7em;
    display: block;
    white-space: pre;
  }

  .strongs-number {
    // position: absolute;
    // top: -20px;
    // right: 0;
    color: #aaa;
    font-size: 0.5em;
  }

  .original-text {
    min-width: 0.7em;
    display: block;
  }
}
</style>
