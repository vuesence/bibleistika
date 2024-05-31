<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";
// import HamburgerIcon from "@/components/ui/HamburgerIcon.vue";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import { useAppSettings } from "@/composables/useAppSettings";

const { openSettingsDialog } = useAppSettings();
</script>

<template>
  <header class="header">
    <RouterLink :to="{ name: 'home' }">
      <div class="logo">
        <BaseIcon size="30" name="logo" class="icon" />
        <div class="title">
          Strongs Bible
        </div>
      </div>
    </RouterLink>
    <!-- <div class="links">
      <RouterLink v-for="link in links" :key="link.title" class="link" :to="link.route">
        {{ link.title }}
      </RouterLink>
    </div> -->
    <div class="right-pane">
      <button class="settings-btn" @click="openSettingsDialog">
        <BaseIcon name="settings" />
      </button>
      <ThemeToggle />
    </div>
    <!-- <HamburgerIcon v-model="isDrawerOpen" class="drawer-toggle" /> -->
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  height: 4em;
  padding: 15px 20px;
  background-color: var(--vwa-c-bg);
  z-index: 3;
  justify-content: space-between;
  border-bottom: 1px solid var(--vwa-c-divider);

  .logo {
    max-width: 200px;
    display: flex;
    align-items: center;

    .title {
      margin-left: 0.6rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--vwa-c-text-1)
    }
  }

  .right-pane {
    display: flex;
    gap: 1em;
    align-items: center;

    .settings-btn {
      border: 0;
    }
  }

}
</style>
