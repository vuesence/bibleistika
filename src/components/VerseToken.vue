<script setup lang="ts">
// import type { PropType } from 'vue'
// import { defineProps } from "vue";
import { getSC } from "@/composables/useStrongsConcordance";

const props = defineProps({
  token: {
    type: Object as () => VerseToken,
    required: true,
  },
  hideOW: {
    type: Boolean,
    default: false,
  },
  hideSN: {
    type: Boolean,
    default: false,
  },
});

// const sc = getSC(props.token.sn);
</script>

<template>
  <VDropdown :triggers="['hover', 'focus']">
    <div class="token">
      <span class="text">
        {{ props.token.tr ?? 'nbsp' }}
      </span>
      <span v-if="props.token.sn && !hideSN" class="strongs-number">
        {{ props.token.sn }}
      </span>
      <span v-if="props.token.sc && !hideOW" class="original-text">
        {{ props.token.sc.word }}
      </span>
    </div>
    <template #popper>
      <div v-if="props.token.sc" class="sc-preview">
        <div class="title">
          <span class="word">{{ props.token.sc.word }}</span>
          <span class="strongs-number">({{ props.token.sc.sn }})</span>
        </div>
        <div class="desc" v-html="getSC(props.token.sn).desc" />
        <!-- {{ getSC(props.token.sn).desc }} -->
        <!-- </div> -->
      <!-- <div class="desc">
        {{ getSC(props.token.sn).desc }}
      </div> -->
      </div>
    </template>
  </VDropdown>
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
      background: var(--vwa-c-soft);
      // border-right-color: #eee;
      // border-left-color: #eee;
    }
  }
  .word-occurrences & {
    border: 0;
  }

  .text {
    min-width: 0.7em;
    display: block;
    white-space: pre;
    .word-occurrences & {
      min-width: unset;
    }
  }

  .strongs-number {
    // position: absolute;
    // top: -20px;
    // right: 0;
    color: var(--vwa-c-text-2);
    font-size: 0.5em;
  }

  .original-text {
    min-width: 0.7em;
    display: block;
  }
}

.sc-preview {
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 5px;
  background: #f9f9f9;
  color: #333;
  max-width: 400px;
  .title {
    margin-bottom: 5px;
    .word {
      font-weight: 600;
    }
    .strongs-number {
      color: #aaa;
      margin-left: 1em;
      font-size: 0.8em;
    }
  }
}

.highlighted .text {
  font-weight: 800;
  color: red;
}
</style>
