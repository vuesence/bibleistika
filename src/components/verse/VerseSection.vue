<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import BaseTabs from "../ui/BaseTabs.vue";
import MasoreticText from "./MasoreticText.vue";
import CrossReferences from "./CrossReferences.vue";
import VerseHeader from "./VerseHeader.vue";
import VerseComponent from "./VerseComponent.vue";
import { loadVerse } from "@/composables/useVerseUtils";

const props = defineProps({
  vid: String,
});

const verse = ref();

watch(() => props.vid, async () => {
  // console.log("props.vid", props.vid);
  verse.value = await loadVerse(props.vid);
  // console.log("2", verse.value);
}, { immediate: true });

const selected = ref(-1);

watch(() => props.vid, () => {
  selected.value = -1;
});

const route = useRoute();

watch(() => route.name, () => {
  if (route.name !== "verse") {
    selected.value = -1;
  }
});

const sections = [
  { title: "Масоретский текст", component: MasoreticText },
  { title: "Перекрестные ссылки", component: CrossReferences },
];
</script>

<template>
  <div v-if="verse">
    <VerseHeader :vid="verse.vid" />
    <VerseComponent :verse="verse" class="main-verse" />
    <BaseTabs v-model="selected" :sections="sections">
      <template #tabTitle="{ section }">
        {{ section.title }}
      </template>
      <template #tabComponent="{ selectedTab }">
        <component :is="sections[selectedTab].component" :vid="verse.vid" />
      </template>
    </BaseTabs>
  </div>
</template>

<style scoped>
button {
  border: 0;
}
:deep(.tabs-header) {
  margin-bottom: 1em;
}
:deep(.tab-title.active) {
  border-bottom: 1px solid var(--bbl-c-border) !important;
}
</style>
