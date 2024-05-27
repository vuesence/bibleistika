<script setup lang="ts">
import type { PropType } from "vue";
import VerseToken from "./VerseToken.vue";
import { router } from "@/router";
import { settings } from "@/composables/useAppSettings";

const props = defineProps({
  verse: {
    type: Object as PropType<Verse>,
    default: null,
  },
  highlighted: {
    type: String,
    default: null,
  },
});

function displayWord(sn: string) {
  router.push({ name: "verse-word", params: { vid: props.verse.vid, sn } });
}
</script>

<template>
  <div v-if="verse" class="verse">
    <VerseToken
      v-for="(token, index) in verse.tokens"
      :key="index" :token="token"
      :class="{ highlighted: settings.highlightSearch && props.highlighted === token.sn }"
      @click="displayWord(token.sn)"
    />
  </div>
</template>

<style scoped>
.verse {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2em;
  margin-bottom: 7px;
  padding-bottom: 7px;
  border-bottom: 1px solid var(--vwa-c-divider);
  .word-occurrences & {
    row-gap: 0;
  }
}

.verse-header {
  display: flex;
  align-items: center;
}

.nav-button {
  height: 2em;
  margin-left: 1.5em;
  padding: 0 1em;
}
</style>
