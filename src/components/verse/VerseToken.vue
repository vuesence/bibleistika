<script setup lang="ts">
import { ref } from "vue";
import VerseTokenTooltip from "./VerseTokenTooltip.vue";
import { settings } from "@/composables/useAppSettings";

const props = defineProps({
  token: {
    type: Object as () => VerseToken,
    required: true,
  },
  textOnly: {
    type: Boolean,
  },
});

const showTooltip = ref(false);
let timeout;

function hideTooltip() {
  clearTimeout(timeout);
  showTooltip.value = false;
}

function displayTooltip() {
  if (props.token.sc) {
    timeout = setTimeout(() => {
      showTooltip.value = true;
    }, 300);
  }
}
</script>

<template>
  <button
    class="token"
    :popovertarget="props.token.sn ? `popover-${props.token.sn}` : null"
    @mouseenter="displayTooltip()"
    @focusin="displayTooltip()"
    @mouseleave="hideTooltip()"
    @blur="hideTooltip()"
  >
    <span class="text">
      {{ props.token.tr ?? "&nbsp;" }}
    </span>
    <span
      v-if="!props.textOnly && props.token.sn && settings.showStrongsNumber"
      class="strongs-number"
    >
      {{ props.token.sn }}
    </span>
    <span v-if="!props.textOnly && props.token.sc && settings.showStrongsLemma" class="lemma">
      {{ props.token.sc.lemma }}
    </span>
    <VerseTokenTooltip
      v-if="showTooltip"
      :sc="props.token.sc"
      class="token-tooltip"
    />
  </button>
</template>

<style scoped>
  .token {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    font-size: 1em;
    border: 0;
    .main-verse & {
      border-right: 1px solid transparent;
      border-left: 1px solid transparent;
    }
    &.highlighted {
      color: red;
    }

    /* &:has(.strongs-number):not(.no-hover) { */
    /* &:has(.strongs-number) {
      cursor: pointer;
    } */

    /* &:has(.strongs-number):not(.no-hover) { */
    &:has(.strongs-number) {
      cursor: pointer;
      &:hover {
        opacity: 0.8;
        background: var(--bbl-c-soft);
      }
    }

    .lemma-occurrences & {
      border: 0;
      .text {
        min-width: unset;
      }
    }

    .text {
      display: block;
      white-space: pre;
      .main-verse & {
        min-width: 0.9em;
      }
    }

    .strongs-number {
      color: var(--bbl-c-text-2);
      font-size: 0.5em;
      line-height: 1.2em;
    }

    .lemma {
      min-width: 0.7em;
      display: block;
      margin-bottom: 0.5em;
    }
  }
  .verse-list .no-tooltip .token-tooltip {
    display: none;
  }
</style>
