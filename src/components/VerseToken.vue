<script setup lang="ts">
import { nextTick, ref } from "vue";
import VerseTokenPreview from "./VerseTokenPreview.vue";
import { settings } from "@/composables/useAppSettings";

const props = defineProps({
  token: {
    type: Object as () => VerseToken,
    required: true,
  },
});

const popover = ref();
const showTooltip = ref(false);

function hideTooltip() {
  if (props.token.sc && popover.value) {
    showTooltip.value = false;
    popover.value.hideTooltip();
  }
}

function displayTooltip() {
  if (props.token.sc) {
    showTooltip.value = true;
    nextTick(() => {
      popover.value.showTooltip();
    });
  }
}
</script>

<template>
  <div>
    <div
      class="token"
      :popovertarget="`popover-${props.token.sn}`"
      @mouseenter="displayTooltip()"
      @mouseleave="hideTooltip()"
    >
      <span class="text">
        {{ props.token.tr ?? 'nbsp' }}
      </span>
      <span
        v-if="props.token.sn && settings.showStrongsNumber"
        class="strongs-number"
      >
        {{ props.token.sn }}
      </span>
      <span
        v-if="props.token.sc && settings.showStrongsOriginalWord"
        class="original-word"
      >
        {{ props.token.sc.word }}
      </span>
    </div>
    <VerseTokenPreview v-if="showTooltip" ref="popover" :token="props.token" />
  </div>
</template>

<style scoped>
.token {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  .highlighted & {
    color: red;
  }

  &:has(.strongs-number) {
    cursor: pointer;
  }

  &:has(.strongs-number) {
    &:hover {
      opacity: 0.8;
      background: var(--vwa-c-soft);
    }
  }

  .word-occurrences & {
    border: 0;
    .text {
      min-width: unset;
    }
  }

  .text {
    min-width: 0.7em;
    display: block;
    white-space: pre;
  }

  .strongs-number {
    color: var(--vwa-c-text-2);
    font-size: 0.5em;
  }

  .original-word {
    min-width: 0.7em;
    display: block;
  }
}
</style>
