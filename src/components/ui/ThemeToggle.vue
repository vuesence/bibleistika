<script lang="ts" setup>
import { computed } from "vue";
import BaseToggle from "./BaseToggle.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
import { useAppSettings } from "@/composables/useAppSettings";

const { settings, toggleTheme } = useAppSettings();

const switchTitle = computed(() => {
  return settings.darkMode ? "Switch to light theme" : "Switch to dark theme";
});
</script>

<template>
  <BaseToggle
    :title="switchTitle"
    class="toggle"
    :aria-checked="settings.darkMode"
    @click="toggleTheme"
  >
    <BaseIcon size="10" name="sun" class="sun" fill="white" />
    <BaseIcon size="10" name="moon" class="moon" />
  </BaseToggle>
</template>

<style scoped>
.sun, .dark .moon {
  opacity: 1;
}
.moon, .dark .sun {
  opacity: 0;
}
.dark .toggle :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}
</style>
