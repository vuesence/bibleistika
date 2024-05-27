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
    <span class="section-title">Типографика</span>
    <div class="row">
      <div class="title">
        Размер шрифта:
      </div>
      <div class="value">
        <BaseButton class="smaller" @click="updateFontSize(-2)">
          a
        </BaseButton>
        <BaseButton class="bigger" @click="updateFontSize(2)">
          A
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "./settings.css";

.typography {
  button {
    height: 1rem;
  }
  .smaller {
    margin-right: 1rem;
    font-size: 12px;
    height: 1rem;
  }
  .bigger {
    font-size: 22px;
  }
}
</style>
