<script setup lang="ts">
import { ref } from "vue";
import { PaginationBar } from "./ui/pagination";
import VerseText from "./VerseText.vue";

const props = defineProps({
  verses: {
    type: Array as () => Verse[],
    default: () => [],
  },
  sn: {
    type: String,
    default: null,
  },
});

const page = ref(1);
const pageSize = ref(5);

function changePagination(data) {
  pageSize.value = data.pageSize;
}
</script>

<template>
  <div class="verse-list">
    <PaginationBar
      v-model="page"
      :total-row="verses.length"
      :page-size-menu="[5, 10, 20, 50]"
      align="center"
      language="ru"
      class="pagination"
      @change="changePagination"
    />

    <div class="verses">
      <div
        v-for="verse in props.verses.slice(
          (page - 1) * pageSize,
          page * pageSize,
        )"
        :key="verse.vid"
        class="verse-wrapper"
      >
        <VerseText :verse="verse" mode="short" :highlighted="props.sn" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .verse-list {
    margin-top: 1em;

    .verse-wrapper {
      display: flex;
      align-items: flex-start;
    }

    .shortcut {
      margin-left: 0.5em;
      margin-top: 3px;
      color: var(--bbl-c-text-3);
      transition: color 0.3s ease;

      &:hover {
        color: var(--bbl-c-text-1);
      }
    }

    .pagination {
      margin: 1em auto;
    }

    :deep(.token > .strongs-number),
    :deep(.token > .lemma) {
      display: none;
    }
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
