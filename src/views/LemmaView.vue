<script setup lang="ts">
import LemmaDescription from "../components/LemmaDescription.vue";
// import VerseToken from '../components/VerseToken.vue'
// import { ref, onMounted } from "vue";
// import { getVerse } from "@/models/VerseLibrary";
// import { router } from '@/router';
// import { parseVerseId } from "@/utils/verses";
// import verses from "@/services/api/verses";

const props = defineProps({
  sn: {
    type: String,
    // default: "1-1-1"
  },
});

// onMounted(async () => {
// })
</script>

<template>
  <div>
    <Transition mode="out-in">
      <LemmaDescription :key="props.sn" :sn="props.sn" class="lemma-desc" />
    </Transition>

    <!-- <Transition mode="out-in">
      <LemmaOccurrences :sn="props.sn" class="lemma-desc" :key="props.sn" />
    </Transition> -->
    <!-- <router-view /> -->
  </div>
</template>

<style scoped>
.lemma-desc {
  margin-top: 2em;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
