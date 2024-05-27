<script setup lang="ts">
import BaseSwitch from "../ui/BaseSwitch.vue";
import { settings } from "@/composables/useAppSettings";
</script>

<template>
  <section class="verse">
    <span class="section-title">Отображения стиха</span>
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
        <BaseSwitch v-model="settings.showStrongsOriginalWord" />
      </div>
    </div>
    <div class="row">
      <div class="title">
        Подсвечивать текущее слово в списке вхождений:
      </div>
      <div class="value">
        <BaseSwitch v-model="settings.highlightSearch" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "./settings.css";
</style>
