<script setup lang="ts">
import VerseSection from "../components/verse/VerseSection.vue";
import LemmaDescription from "../components/LemmaDescription.vue";
import TwoColumnLayout from "@/layouts/TwoColumnLayout.vue";

const props = defineProps({
  vid: {
    type: String,
    default: "1:1:1",
  },
  sn: {
    type: String,
  },
});
</script>

<template>
  <!-- <div class="layout"> -->
  <TwoColumnLayout>
    <template #top>
      <VerseSection :vid="vid" />
    </template>

    <template #aside>
      <Transition mode="out-in">
        <LemmaDescription v-if="props.sn" :key="props.sn" :sn="props.sn" class="lemma-section1" />
      </Transition>
    </template>

    <template #bottom>
      <router-view v-slot="{ Component }" mode="out-in">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </router-view>
    </template>
  </TwoColumnLayout>
</template>

<style scoped>
</style>
