<script setup lang="ts">
import { onMounted, ref } from "vue";
import { loadWordOccurrences } from "../composables/useVerseUtils";
import VerseText from "./VerseText.vue";
// import { getSC } from "@/composables/useStrongsConcordance";

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
});

const verses = ref([]);

onMounted(async () => {
  verses.value = await loadWordOccurrences(props.sn);
});
</script>

<template>
  <div v-if="props.sn" class="word-occurrences">
    <!-- <p class="desc" v-html="getSC(props.sn).desc">
    </p> -->
    <!-- <div v-for="verse in verses" :key="verse.vid"> -->
    <VerseText
      v-for="verse in verses"
      :key="verse.vid"
      :verse="verse"
      :hide-s-n="true"
      :hide-o-w="true"
    />
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
// .word-occurrences {
// }
.desc {
  // white-space: pre;
}
</style>
