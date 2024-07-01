<script setup lang="ts">
// import { ref, watch } from "vue";
// import { useRoute } from "vue-router";
import VerseSection from "../components/verse/VerseSection.vue";
import LemmaDescription from "../components/LemmaDescription.vue";
// import { loadVerse, useVerseUtils } from "../utils/verseUtils";
// import { useStrongsConcordance } from "@/composables/useStrongsConcordance";
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

// const { verse } = useVerseUtils(props);

// const { sc } = useStrongsConcordance(props);
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
