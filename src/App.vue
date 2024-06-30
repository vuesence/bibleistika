<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useScreenWidth } from "@/composables/useScreenWidth";
import { useSplashScreen } from "@/composables/useSplashScreen";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import SettingsDialog from "@/components/settings/SettingsDialog.vue";
// import AppContentPane from "@/components/AppContentPane.vue";
import { useAppSettings } from "@/composables/useAppSettings";
import AppLoaderBar from "@/components/ui/AppLoaderBar.vue";

useScreenWidth({
  mobile: 480,
  tablet: 767,
  notebook: 1199,
  desktop: 10000,
});

useSplashScreen();

const settingsDialog = ref();
onMounted(() => {
  useAppSettings().setSettingsDialog(settingsDialog.value);
});
</script>

<template>
  <div class="app">
    <AppHeader />
    <AppLoaderBar />
    <main>
      <!-- <router-view v-slot="{ Component }">
        <Transition mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view> -->
      <router-view />
    </main>
    <AppFooter />
    <SettingsDialog ref="settingsDialog" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  min-height: 100svh;
  /* width: 100%; */

  main {
    flex-grow: 1;
    /* max-width: 1000px; */
    padding: 1em 2em;
    margin-top: 1em;
    z-index: 2;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
