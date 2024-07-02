<script setup lang="ts">
import { router } from "@/router";

const props = defineProps({
  to: {
    type: [String, Object],
    default: "",
  },
});

const emit = defineEmits(["click"]);

function click(event) {
  if (props.to) {
    const to = typeof props.to === "object" ? props.to : { name: props.to };
    router.push(to);
  } else {
    emit("click", event);
  }
}
</script>

<template>
  <button class="base-button" @click="click">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  color: var(--bbl-c-text-2);
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  border-radius: 4px;
  border-color: var(--bbl-c-border);
  font-weight: 700;
  /* min-height: 2.0em; */
  /* min-width: 2em; */
  padding: 0 1em;

  &:not(.text) {
    opacity: 0.9;
    background-color: var(--bbl-c-bg-alt);
  }

  &.active {
    opacity: 1 !important;
  }

  &.alight {
    background-image: linear-gradient(to right, #0686f3, #5a45ed);
  }

  &.icon {
    background:transparent;
    border: 0;
    padding: 0;
    &:hover {
      background-color:transparent;
    }
  }

  &.high {
    min-height: 44px;
  }

  &:hover {
    opacity: 1;
    color: var(--bbl-c-text-2);
    background-color: var(--bbl-c-bg-hglt);
  }

  &.category:hover {
    background: none;
  }

  &[disabled] {
    opacity: 0.5;
  }

  &.wide {
    width: 100%;
  }

  /* Ripple effect */
  &.ripple {
    background-position: center;
    transition: background 0.9s;
    &:hover {
      background: #fff radial-gradient(circle, transparent 1%, #e5e2f5 1%) center/15000%;
    }
    &:active {
      background-color: #e5e2f5;
      background-size: 100%;
      transition: background 0s;
    }
  }
}
</style>
