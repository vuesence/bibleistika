<script setup lang="ts">
// import { ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import { settings } from "@/composables/useAppSettings";
import { getCssVar, setCssVar, toNumber } from "@/utils/css-utils";

// const popover = ref();
// const showTooltip = ref(false);

function updateFontSize(change: number) {
  const fs = toNumber(getCssVar("--vwa-font-size"));
  settings.fontSize = `${fs + change}px`;
  setCssVar("--vwa-font-size", settings.fontSize);
}
</script>

<template>
  <section class="typography">
    <div class="title">
      Размер шрифта:
    </div>
    <div class="font-size-widget">
      <BaseButton class="smaller" @click="updateFontSize(-2)">
        a
      </BaseButton>
      <BaseButton class="bigger" @click="updateFontSize(2)">
        A
      </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.typography {
  display: flex;
  /* width: 100%; */
  /* border: 1px solid green; */
  justify-content: space-between;
  align-items: center;
  .font-size-widget {
    display: flex;
    margin-left: 2rem;
    /* width: 100%; */

    .smaller {
      margin-right: 1rem;
      font-size: 12px;
    }
    .bigger {
      font-size: 22px;
    }
  }
}
</style>
