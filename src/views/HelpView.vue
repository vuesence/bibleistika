<script setup lang="ts">
import BaseButton from "../components/ui/BaseButton.vue";
import { router } from "@/router";

const sections = [
  { title: "О приложении", name: "help-about" },
  { title: "Использование", name: "help-usage" },
  { title: "Пример", name: "help-example" },
];
console.log(router.currentRoute.value);
</script>

<template>
  <div class="help">
    <h2>Справка</h2>
    <div class="buttons">
      <BaseButton
        v-for="(section, index) in sections"
        :key="index"
        class="button"
        :class="{ selected: section.name === router.currentRoute.value.name }"
        @click="router.push({ name: section.name })"
        @keyup="router.push({ name: section.name })"
      >
        {{ section.title }}
      </BaseButton>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
h2 {
  margin-top: 0;
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-bottom: 2em;
  .mobile & {
    justify-content: space-between;
    gap: unset;
    &:deep(.base-button) {
      letter-spacing: 0;
    }
  }
}
.button {
  border: 1px solid var(--bbl-c-border);
  white-space: nowrap;
}
.mobile .button {
  padding: 3px 4px;
  min-width: 9em;
  &.active {
    border-color: var(--bbl-c-text-2);
  }
}
</style>
