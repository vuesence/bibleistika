<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import BaseButton from "../ui/BaseButton.vue";
// import VerseComponent from "./VerseComponent.vue";
import VerseList from "./VerseList.vue";
import { loadXr } from "@/utils/crossReferensesUtils";
import { loadVerse } from "@/utils/verseUtils";

const props = defineProps({
  vid: String,
});

const xrs = ref();
const currentXr = ref();
const verses = ref();

watch(currentXr, async () => {
  verses.value = [];
  currentXr.value?.vids.forEach(async (vid: string) => {
    const v = await loadVerse(vid);
    if (v) {
      verses.value.push(v);
    }
  });
  // console.log(verses.value);
});

onMounted(async () => {
  xrs.value = await loadXr(props.vid);
});
</script>

<template>
  <!-- {{ xrs }} -->
  <ul>
    <li v-for="(xr, index) in xrs" :key="index">
      <BaseButton
        class="item"
        @click="currentXr = xr"
      >
        {{ xr.title }}
      </BaseButton>
    </li>
  </ul>
  <div v-if="currentXr" class="details">
    <VerseList :verses="verses" :show-pagination="false" />
  </div>
  <!-- <VerseComponent :verse="verse" class="cross-references" /> -->
</template>

<style scoped>
ul {
  display: flex;
  white-space: nowrap;
  flex-wrap: wrap;
  column-gap: 1em;
  row-gap: 0.5em;
  margin-bottom: 1em;
  li {
    .item {
      width: 9em;
      padding: 0 0.3em;
    }
  }
}
.details {
  margin-top: 2em;
  color: var(--bbl-c-text-2);
  font-size: 0.9em;
}
</style>
