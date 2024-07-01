<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import BaseTabs from "../ui/BaseTabs.vue";
import MasoreticText from "./MasoreticText.vue";
import CrossReferences from "./CrossReferences.vue";
import VerseHeader from "./VerseHeader.vue";
import VerseComponent from "./VerseComponent.vue";
import { loadVerse } from "@/utils/verseUtils";

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

const sections = reactive([
  { title: "Масоретский текст"},
  { title: "Перекрестные ссылки"},
]);

const sectionComponents = [MasoreticText, CrossReferences];

watch(() => props.vid, () => {
  selected.value = -1;
  updateTitle();
}, { immediate: true });

const route = useRoute();

watch(() => route.name, () => {
  if (route.name !== "verse") {
    selected.value = -1;
  }
  updateTitle();
});

function updateTitle() {  
  const [bookId] = props.vid.split(":");
  sections[0].title = +bookId < 40 ? "Масоретский текст" : "Textus Receptus"
}

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
        <component :is="sectionComponents[selectedTab]" :vid="verse.vid" />
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
