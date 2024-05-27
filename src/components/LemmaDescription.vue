<script setup lang="ts">
// import { defineProps } from "vue";
// import { StrongsConcordance } from "../models/StrongsConcordance";
import { computed } from "vue";
import BaseIcon from "./ui/BaseIcon.vue";
import { router } from "@/router";

const props = defineProps({
  sc: {
    type: Object as () => StrongsConcordance,
    default: null,
  },
});

const audioUrl = computed(() => `https://4bbl.ru/data/strong/${props.sc.sn.startsWith("H")
  ? "hebrew"
  : "greek"}/${props.sc.sn.substring(1)}.mp3`);

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
  <div class="wrapper">
    <div v-if="sc" class="lemma-desc">
      <h2>{{ sc.lemma }}</h2>
      <h4>{{ sc.sn }}</h4>
      <p class="desc" v-html="buildDesc(sc.desc)" />
      <button class="show-occurrences-btn" @click="go('verse-lemma-occurrences')">
        Показать вхождения
      </button>

      <button class="show--btn" @click="go('lemma-bdb-dict')">
        BDB
      </button>
      <button class="show--btn" @click="go('lemma-gesenius-dict')">
        Gesenius
      </button>

      <div class="stats">
        <div class="pron" title="Произношение" @click="playAudio()">
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
      </audio>
    </div>
  </div>
</template>

<style scoped>
.lemma-desc {
  margin-left: 1em;

  .show-occurrences-btn {
    border: 1px solid var(--vwa-c-border);
    padding: 2px 9px;
    color: var(--vwa-c-brand-2);
    transition: all 0.3s ease;
    margin: 1em;
    &:hover {
      color: var(--vwa-c-text-1);
    }
  }

  .desc {
    line-height: 1.5em;
  }
  .stats {
    > div {
      display: flex;
      align-items: center;
      margin: 5px 0;
      color: var(--vwa-c-text-3);
      transition: all 0.3s ease;
      &.pron {
        cursor: pointer;
        &:hover {
          color: var(--vwa-c-brand-2);
        }
        .base-icon {
          color: var(--vwa-c-brand-1);
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
