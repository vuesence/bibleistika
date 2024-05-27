<script setup lang="ts">
import { onMounted, ref } from "vue";
import { loadLemmaOccurrences } from "../composables/useVerseUtils";
import { PaginationBar } from "./ui/pagination";
import BaseIcon from "./ui/BaseIcon.vue";
import VerseText from "./VerseText.vue";

const props = defineProps({
  sn: {
    type: String,
    default: null,
  },
  // mode: {
  //   type: String,
  //   default: "",
  // },
});

const verses = ref([]);
const page = ref(1);
const pageSize = ref(5);

function changePagination(data) {
  pageSize.value = data.pageSize;
}

onMounted(async () => {
  verses.value = await loadLemmaOccurrences(props.sn);
});
</script>

<template>
  <div v-if="props.sn" class="lemma-occurrences">
    <PaginationBar
      v-model="page"
      :total-row="verses.length"
      :page-size-menu="[5, 10, 20, 50]"
      align="center"
      language="ru"
      class="pagination"
      @change="changePagination"
    />
    <!-- <div class="lemma-occurrences"> -->
    <!-- <div class="pagination">
      <button :disabled="page === 1" @click="page = page - 1">
        Prev
      </button>
      <span class="current-page"> Page {{ page }} </span>
      <button
        :disabled="page >= Math.ceil(verses.length / pageSize)"
        @click="page = page + 1"
      >
        Next
      </button>
    </div> -->

    <div class="verses">
      <div
        v-for="verse in verses.slice((page - 1) * pageSize, page * pageSize)"
        :key="verse.vid"
        class="verse-wrapper"
      >
        <VerseText :verse="verse" mode="short" :highlighted="props.sn" />
        <router-link
          :to="{ name: 'verse', params: { vid: verse.vid } }"
          class="shortcut"
        >
          <BaseIcon size="16" name="arrow-out" />
        </router-link>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
  .lemma-occurrences {
    margin-top: 1em;

    .verse-wrapper {
      display: flex;
      align-items: flex-start;
    }

    .shortcut {
      margin-left: 0.5em;
      margin-top: 3px;
      color: var(--vwa-c-text-3);
      transition: color 0.3s ease;

      &:hover {
        color: var(--vwa-c-text-1);
      }
    }

    .pagination {
      margin: 1em auto;
    }

    :deep(.token .strongs-number),
    :deep(.token .original-lemma) {
      display: none;
    }
  }

  .pagination1 {
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
