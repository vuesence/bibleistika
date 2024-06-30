<script setup lang="ts">
import { ref } from "vue";
import BaseTabs from "@/components/ui/BaseTabs.vue";
import HelpAppAbout from "@/components/help/HelpAppAbout.vue";
import HelpAppUsage from "@/components/help/HelpAppUsage.vue";

const selected = ref(0);

const sections = [
  { title: "О приложении", component: HelpAppAbout },
  { title: "Использование приложения", component: HelpAppUsage },
];

</script>

<template>
  <div>
    <BaseTabs v-model="selected" :sections="sections" :hidableTabs="false">
      <template #tabTitle="{ section }">
        {{ section.title }}
      </template>
      <template #tabComponent="{ selectedTab }">
        <component :is="sections[selectedTab].component" />
      </template>
    </BaseTabs>
    
    
  </div>
</template>

<style scoped></style>
