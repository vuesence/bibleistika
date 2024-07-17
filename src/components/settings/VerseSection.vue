<script setup lang="ts">
import BaseSwitch from "../ui/BaseSwitch.vue";
import { settings } from "@/composables/useAppSettings";
</script>

<template>
  <section class="verse">
    <span class="section-title">Стихи</span>
    <div class="row">
      <div class="title">
        Показывать номера Стронга:
      </div>
      <div class="value">
        <!-- title="switchTitle" -->
        <BaseSwitch v-model="settings.showStrongsNumber" />
      </div>
    </div>
    <div class="row">
      <div class="title">
        Показывать слово в оригинале:
      </div>
      <div class="value">
        <BaseSwitch v-model="settings.showStrongsLemma" />
      </div>
    </div>
    <div class="row">
      <div class="title">
        Подсвечивать текущее слово в списке стихов:
      </div>
      <div class="value">
        <BaseSwitch v-model="settings.highlightSearch" />
      </div>
    </div>
    <div class="row">
      <div class="title">
        Показывать всплывающую подсказку в списке стихов:
      </div>
      <div class="value">
        <BaseSwitch v-model="settings.showTooltipInList" />
      </div>
    </div>
    <div class="row">
      <div class="title">
        Показывать Масоретский текст справа налево (как в оригинале):
      </div>
      <div class="value">
        <BaseSwitch v-model="settings.showMasoreticRTL" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "./settings.css";
</style>
