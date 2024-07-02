<script setup lang="ts">
import type { PropType } from "vue";
import VerseToken from "./VerseToken.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
import { router } from "@/router";
import { settings } from "@/composables/useAppSettings";
import { getVerseURI } from "@/utils/bibleUtils";

const props = defineProps({
  verse: {
    type: Object as PropType<Verse>,
  },
  highlightedSn: {
    type: String,
    default: null,
  },
  textOnly: {
    type: Boolean,
    default: false,
  },
});

// console.log("VerseComponent setup: ", props.verse);

function displayWord(sn: string) {
  if (sn) {
    router.push({ name: "verse-lemma", params: { vid: props.verse.vid, sn } });
  }
}
function copy(verse) {
  navigator.clipboard.writeText(`${verse.text} 
    (${getVerseURI(verse.vid).book}${getVerseURI(verse.vid).chapterAndVerse})`);
}
</script>

<template>
  <div v-if="verse?.vid" class="verse">
    <div class="uri">
      {{ getVerseURI(verse.vid).book }} <br /> {{ getVerseURI(verse.vid).chapterAndVerse }}
    </div>
    <div class="content">
      <VerseToken
        v-for="(token, index) in verse.tokens"
        :key="index"
        :token="token"
        :class="{
          highlighted:
            settings.highlightSearch && props.highlightedSn === token.sn,
        }"
        :text-only="props.textOnly"
        @click="displayWord(token.sn)"
      />
    </div>
    <div class="actions">
      <router-link :to="{ name: 'verse', params: { vid: verse.vid } }" class="anchor">
        <BaseIcon size="16" class="icon" name="arrow-out" title="Перейти к этому стиху" />
      </router-link>
      <BaseButton class="copy icon ripple" aria-label="Копировать стих" title="Скопировать стих" @click="copy(verse)">
        <BaseIcon size="20" name="copy" />
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.verse {
  display: flex;

  .uri {
    color: var(--bbl-c-text-2);
    margin: 0 4px 0 0;
    font-size: 0.7em;
    /* font-style: italic; */
    white-space: nowrap;
    flex: 0 0 3em;
    line-height: 1.3em;
    min-width: 2.1rem;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    row-gap: 0.3em;
    margin-bottom: 1em;
    padding-bottom: 0.6em;
    border-bottom: 1px solid var(--bbl-c-divider);

    .verse-list & {
      row-gap: 0;
    }
  }

  .actions {
    margin: 0.1em 0 0 0.5em;
    /* color: var(--bbl-c-text-3); */
    .anchor, .copy {
      color: var(--bbl-c-text-3);
      transition: color 0.3s ease-out;
      &:hover {
        color: var(--bbl-c-text-1);
      }
    }
    .copy {
      /* display: block; */
      margin-top: 6px;
      /* cursor: pointer; */
      /* &:hover {
        color: var(--bbl-c-text-1);
      } */
    }
  }
}
</style>
