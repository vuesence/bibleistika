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

const page = ref(1);
const perPage = ref(5);

onMounted(async () => {
  verses.value = await loadWordOccurrences(props.sn);
});
</script>

<template>
  <div v-if="props.sn" class="word-occurrences">
    <div class="word-occurrences">
      <div class="pagination">
        <button :disabled="page === 1" @click="page = page - 1">
          Prev
        </button>
        <span class="current-page"> Page {{ page }} </span>
        <!-- <span
          v-for="i in Math.ceil(verses.length / perPage)"
          :key="`page-${i}`"
          class="page-number"
          :class="{ active: page === i }"
          @click="page = i"
        >
          {{ i }}
        </span> -->

        <button
          :disabled="page >= Math.ceil(verses.length / perPage)"
          @click="page = page + 1"
        >
          Next
        </button>
      </div>

      <div class="verses">
        <VerseText
          v-for="verse in verses.slice(
            (page - 1) * perPage,
            page * perPage,
          )"
          :key="verse.vid"
          :verse="verse"
          :hide-s-n="true"
          :hide-o-w="true"
          :highlighted="props.sn"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .word-occurrences {
    margin-top: 1em;
  }
  .desc {
    // white-space: pre;
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }

  .current-page {
    margin: 0 1em;
  }

  .verses {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
