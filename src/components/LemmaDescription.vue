<script setup lang="ts">
import { computed } from "vue";
import BaseIcon from "./ui/BaseIcon.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
// import { defineProps } from "vue";
// import { StrongsConcordance } from "../models/StrongsConcordance";
import { router } from "@/router";
import { useStrongsConcordance } from "@/composables/useStrongsConcordance";

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
});

const { sc } = useStrongsConcordance(props);

const audioUrl = computed(() => `https://4bbl.ru/data/strong/${props.sn.startsWith("H")
  ? "hebrew"
  : "greek"}/${props.sn.substring(1)}.mp3`);

function go(to) {
  router.push({
    name: to,
    params: {
      vid: router.currentRoute.value.query.vid,
      sn: router.currentRoute.value.query.sn,
      // mode: 1,
    },
  });
}

function buildDesc(str: string) {
  if (str.includes(" син.")) {
    str = str.replace(" син.", " <br><br>син.");
  }
  return str;
}

function playAudio() {
  document.querySelector("audio")?.play();
}
</script>

<template>
  <article v-if="sc" class="lemma-desc">
    <h2>{{ sc.lemma }}</h2>
    <h4>{{ sc.sn }}</h4>
    <p class="desc" v-html="buildDesc(sc.desc)" />

    <div class="show-occurrences-wrapper">
      <BaseButton class="show-occurrences-btn" @click="go('verse-lemma-occurrences')">
        Показать вхождения
      </BaseButton>
    </div>

    <div class="dictionary-links">
      <BaseButton class="show--btn" @click="go('lemma-bdb-dict')">
        BDB
      </BaseButton>
      <BaseButton class="show--btn" @click="go('lemma-gesenius-dict')">
        Gesenius
      </BaseButton>
    </div>

    <div class="stats">
      <div
        role="button"
        tabindex="0"
        class="pron"
        title="Произношение"
        @click="playAudio()"
        @keydown="playAudio()"
      >
        <BaseIcon name="speaker" size="18" />
        {{ sc.pr }}
      </div>
      <div class="tr" title="Транслитерация">
        <BaseIcon name="xlit" size="18" />
        {{ sc.tr }}
      </div>
      <div class="wc" title="Сколько раз встречается в Библии">
        <BaseIcon name="lemma-count" size="18" />
        {{ sc.f }}
      </div>
    </div>
    <audio controls>
      <source :src="audioUrl" />
      <track kind="captions" default />
    </audio>
  </article>
</template>

<style scoped>
.lemma-desc {
  /* margin-left: 1em; */

  .show-occurrences-wrapper {
    display: flex;
    justify-content: space-around;
    .show-occurrences-btn {
      border: 1px solid var(--bbl-c-border);
      padding: 2px 9px;
      color: var(--bbl-c-brand-2);
      transition: all 0.3s ease;
      margin: 1em;

      &:hover {
        color: var(--bbl-c-text-1);
      }
    }
  }

  .dictionary-links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 1em 0 2em;
  }

  .desc {
    line-height: 1.5em;
  }

  .stats {
    >div {
      display: flex;
      align-items: center;
      margin: 5px 0;
      color: var(--bbl-c-text-3);
      transition: all 0.3s ease;

      &.pron {
        cursor: pointer;

        &:hover {
          color: var(--bbl-c-brand-2);
        }

        .base-icon {
          color: var(--bbl-c-brand-1);
        }
      }

      .base-icon {
        margin-right: 1em;
      }
    }
  }

  audio {
    display: none;
    opacity: 0.4;
    margin-top: 1em;
    max-width: 90%;
    height: 2em;
  }
}
</style>
