<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import VerseHeader from "../components/VerseHeader.vue";
import VerseText from "../components/VerseText.vue";
import LemmaDescription from "../components/LemmaDescription.vue";
import { useVerseUtils } from "../composables/useVerseUtils";
import { useStrongsConcordance } from "@/composables/useStrongsConcordance";
import TwoColumnLayout from "@/layouts/TwoColumnLayout.vue";

const props = defineProps({
  vid: {
    type: String,
    default: "1:1:1",
  },
  sn: {
    type: String,
    // default: "1:1:1",
  },
  mode: {
    type: String,
    default: "",
  },
});

const { verse } = useVerseUtils(props);
const { sc } = useStrongsConcordance(props);
const showOccurrences = ref(false);

const route = useRoute();

watch(() => route.name, () => {
  showOccurrences.value = false;
});
</script>

<template>
  <!-- <div class="layout"> -->
  <TwoColumnLayout>
    <template #top>
      <VerseHeader :vid="props.vid" />
      <VerseText :vid="props.vid" :verse="verse" />
    </template>

    <template #aside>
      <Transition mode="out-in">
        <LemmaDescription
          v-if="props.sn"
          :key="props.sn"
          :sc="sc"
          class="lemma-section1"
        />
      </Transition>
    </template>

    <template #bottom>
      <router-view v-slot="{ Component }" mode="out-in">
        <Transition name="fade">
          <component :is="Component" class="details-section1" />
        </Transition>
      </router-view>
    </template>
  </TwoColumnLayout>
  <!-- </div>
</template> -->
  <!-- </div> -->
</template>

<style scoped>
.verse-section {
  & :deep(.verse .anchor) {
    display: none;
  }

}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
