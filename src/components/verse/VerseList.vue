<script setup lang="ts">
import { ref } from "vue";
import VerseComponent from "./VerseComponent.vue";
import { PaginationBar } from "@/components/ui/pagination";
import { settings } from "@/composables/useAppSettings";

const props = defineProps({
  verses: {
    type: Array as () => Verse[],
    default: () => [],
  },
  sn: {
    type: String,
    default: null,
  },
  showPagination: {
    type: Boolean,
    default: true,
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
      v-if="showPagination"
      v-model="page"
      :total-row="verses.length"
      :page-size-menu="[10, 20, 50, 100]"
      align="center"
      language="ru"
      class="pagination"
      @change="changePagination"
    />

    <div
      class="verses"
      :class="{ 'no-tooltip': !settings.showTooltipInList }"
    >
      <template
        v-for="verse in props.verses.slice(
          (page - 1) * pageSize,
          page * pageSize,
        )"
        :key="verse.vid"
      >
        <VerseComponent :verse="verse" :highlighted-sn="props.sn" :text-only="true" />
      </template>
    </div>
  </div>
</template>

<style scoped>
  .verse-list {
    margin-top: 1em;

    /* .verse-wrapper {
      display: flex;
      align-items: flex-start;
    } */

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
