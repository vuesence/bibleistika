<script setup lang="ts">
import { ref } from "vue";
import BaseTabs from "@/components/ui/BaseTabs.vue";
import HelpAppAbout from "@/components/help/HelpAppAbout.vue";
import HelpAppUsage from "@/components/help/HelpAppUsage.vue";
import HelpAppExample from "@/components/help/HelpAppExample.vue";

const selected = ref(0);

const sections = [
  { title: "О приложении", component: HelpAppAbout },
  { title: "Использование", component: HelpAppUsage },
  { title: "Пример", component: HelpAppExample },
];
</script>

<template>
  <div class="help-tabs">
    <h2>Справка</h2>
    <BaseTabs v-model="selected" :sections="sections" :hidable-tabs="false">
      <template #tabTitle="{ section }">
        {{ section.title }}
      </template>
      <template #tabComponent="{ selectedTab }">
        <component :is="sections[selectedTab].component" />
      </template>
    </BaseTabs>
  </div>
</template>

<style scoped>

h2 {
  margin-top: 0;
}

.help-tabs :deep(.tabs-header .tab-title) {
  border: 1px solid var(--bbl-c-border);
  border-radius: 3px;
  padding: 3px 10px;
  min-width: 9em;
  white-space: nowrap;
}
.mobile .help-tabs :deep(.tabs-header .tab-title) {
  margin-right: 0.7em;
  padding: 3px 4px;
  min-width: 7em;
}
.help-tabs :deep(.tabs-header .tab-title.active) {
  border-color: var(--bbl-c-text-2);
}

</style>
