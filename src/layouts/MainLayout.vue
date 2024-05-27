<script setup lang="ts">
import AppContentPane from "@/components/AppContentPane.vue";

// import AppNavigationDrawer from "@/components/TouchSlideoutDrawer.vue";
// import AppSidebar from "@/components/AppNavbar.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
// import { useAppConfig } from "@/composables/useAppConfig";

// const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <div class="app">
    <AppHeader />

    <div class="main-pane">
      <!-- <AppNavigationDrawer v-model="isDrawerOpen">
        <AppSidebar />
      </AppNavigationDrawer> -->

      <AppContentPane />
    </div>

    <AppFooter />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;

  .main-pane {
    // flex-grow: 1;
    // display: flex;
    max-width: 1200px;
    z-index: 2;
  }
}
</style>
