<script setup lang="ts">
import type { PropType } from "vue";
import VerseToken from "./VerseToken.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
import { router } from "@/router";
import { settings } from "@/composables/useAppSettings";
import { getVerseURI } from "@/utils/bibleUtils";

const props = defineProps({
  verse: {
    type: Object as PropType<Verse>,
  },
  highlighted: {
    type: String,
    default: null,
  },
});

console.log(props.verse);

function displayWord(sn: string) {
  if (sn) {
    router.push({ name: "verse-lemma", params: { vid: props.verse.vid, sn } });
  }
}
</script>

<template>
  <div v-if="verse?.vid" class="verse">
    <div class="uri">
      {{ getVerseURI(verse.vid).book }} <br /> {{ getVerseURI(verse.vid).chapterAndVerse }}
    </div>
    <div class="content">
      <VerseToken
        v-for="(token, index) in verse.tokens" :key="index" :token="token" :class="{
          highlighted:
            settings.highlightSearch && props.highlighted === token.sn,
        }" @click="displayWord(token.sn)"
      />
    </div>
    <router-link :to="{ name: 'verse', params: { vid: verse.vid } }" class="anchor">
      <BaseIcon size="16" class="icon" name="arrow-out" title="Перейти к этому стиху" />
    </router-link>
  </div>
</template>

<style scoped>
.verse {
  display: flex;

  .uri {
    color: var(--bbl-c-text-2);
    margin: 0 0.5em 0 0;
    font-size: 0.7em;
    /* font-style: italic; */
    white-space: nowrap;
    flex: 0 0 3em;
    line-height: 1.3em;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    row-gap: 0.3em;
    margin-bottom: 18px;
    padding-bottom: 1em;
    border-bottom: 1px solid var(--bbl-c-divider);

    .verse-list & {
      row-gap: 0;
    }
  }

  .anchor {
    margin-left: 0.5em;
    color: var(--bbl-c-text-3);

    &:hover {
      color: var(--bbl-c-text-1);
    }
  }
}
</style>
