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
  color: var(--be-primary-text-color);
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  border-radius: 4px;
  font-weight: bold;
  min-height: 36px;
  min-width: 55px;
  padding: 0 16px;

  &:not(.text) {
    opacity: 0.9;
    background-color: var(--be-secondary-color);
  }

  &.active {
    opacity: 1 !important;
  }

  &.alight {
    background-image: linear-gradient(to right, #0686f3, #5a45ed);
  }

  &.high {
    min-height: 44px;
  }

  &:hover {
    opacity: 1;
    /* background-color: var(--be-secondary-color); */
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
}
</style>
