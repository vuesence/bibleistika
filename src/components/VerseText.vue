<script setup lang="ts">
import type { PropType } from "vue";
import VerseToken from "./VerseToken.vue";
import BaseIcon from "./ui/BaseIcon.vue";
import { router } from "@/router";
import { settings } from "@/composables/useAppSettings";
import { getVerseURI } from "@/utils/bibleUtils";

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
  router.push({ name: "verse-lemma", params: { vid: props.verse.vid, sn } });
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
    <router-link
      :to="{ name: 'verse', params: { vid: verse.vid } }"
      class="anchor"
    >
      <span class="verse-uri">( {{ getVerseURI(verse.vid) }} )</span>
      <BaseIcon size="16" class="icon" name="arrow-out" />
    </router-link>
  </div>
</template>

<style scoped>
.verse {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2em;
  margin-bottom: 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vwa-c-divider);
  .verse-list & {
    row-gap: 0;
  }
  .anchor {
    display: flex;
    align-items: center;
    color: var(--vwa-c-text-3);
    &:hover {
      color: var(--vwa-c-text-1);
    }
    .verse-uri {
      /* color: var(--vwa-c-text-3); */
      margin: 0 0.5em;
      font-size: 0.7em;
      font-style: italic;
    }
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
