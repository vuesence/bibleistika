<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
// import HamburgerIcon from "@/components/ui/HamburgerIcon.vue";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import { useAppSettings } from "@/composables/useAppSettings";
import { router } from "@/router";

const { openSettingsDialog } = useAppSettings();
</script>

<template>
  <header class="header">
    <RouterLink :to="{ name: 'home' }" aria-label="Вернуться на главную страницу">
      <div class="logo">
        <BaseIcon size="30" name="logo" class="icon" />
        <svg class="title" viewBox="0 0 1194.000000 229.000000">
          <use xlink:href="#title"></use>
        </svg>
      </div>
    </RouterLink>
    <!-- <div class="links">
      <RouterLink v-for="link in links" :key="link.title" class="link" :to="link.route">
        {{ link.title }}
      </RouterLink>
    </div> -->
    <div class="right-pane">
      <BaseButton class="search-btn icon ripple" title="Поиск" @click="router.push({ name: 'search-view' })">
        <BaseIcon name="search" />
      </BaseButton>
      <BaseButton class="settings-btn icon ripple" title="Настройки" @click="openSettingsDialog">
        <BaseIcon name="settings" />
      </BaseButton>
      <BaseButton class="help-btn icon ripple" title="Помощь" @click="router.push({ name: 'help' })">
        <BaseIcon name="help" />
      </BaseButton>
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
  background-color: var(--bbl-c-bg);
  z-index: 3;
  justify-content: space-between;
  border-bottom: 1px solid var(--bbl-c-divider);

  .logo {
    max-width: 200px;
    display: flex;
    align-items: center;
    .mobile & {
      max-width: 140px;
    }

    .title {
      margin-left: 0.6rem;
      font-size: 1.2rem;
      font-weight: 700;
      width: 8rem;
      color: var(--bbl-c-text-1);
      svg {
        margin-top: 5px;
      }
    }
  }

  .right-pane {
    display: flex;
    gap: 1em;
    align-items: center;

    > button {
      border: 0;
      transition: color 0.3s ease-out;
      color: var(--bbl-c-text-3);
      &:hover {
        color: var(--bbl-c-text-1);
      }
    }
  }

}
</style>
