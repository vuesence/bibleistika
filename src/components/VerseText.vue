<script setup lang="ts">
import VerseToken from "./VerseToken.vue";
import { router } from "@/router";

const props = defineProps({
  verse: {
    type: Object,
    default: null,
  },
  hideOW: {
    type: Boolean,
    default: false,
  },
  hideSN: {
    type: Boolean,
    default: false,
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
      :key="index"
      :token="token"
      :hide-o-w="hideOW"
      :hide-s-n="hideSN"
      @click="displayWord(token.sn)"
    />
  </div>
</template>

<style scoped>
.verse {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2em;
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
