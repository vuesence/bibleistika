<script setup lang="ts">
import { books } from "@/models/bible-helpers";

defineProps({
  size: {
    type: Number,
    default: null,
  },
  book: {
    type: Number,
    default: null,
  },
  chapter: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(["next"]);
</script>

<template>
  <div>
    <h2>{{ books[+book - 1].name }}</h2>
    <h3 v-if="chapter !== 0">
      Глава {{ chapter }}
    </h3>
    <h4>Выберите {{ chapter !== 0 ? 'стих' : 'главу' }}</h4>
    <ul class="list">
      <li v-for="i in $props.size" :key="i">
        <button
          class="item"
          @click="emit('next', i)"
        >
          {{ i }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  margin: 0 auto;
}
h3 {
  margin: 0.3em 0;
}
h4 {
  margin-top: 0.3em;
}
.list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 1em;
  column-gap: 1em;
  list-style: none;
  justify-content: center;
  max-width: 600px;
  .item {
    /* border: 0; */
    width: 3rem;
    padding: 3px 7px;
    cursor: pointer;
    border-radius: 2px;
    color: var(--vwa-c-text-2);
    transition: all 0.3s ease;
    &:hover {
      color: var(--vwa-c-text-1);
      background-color: var(--vwa-c-bg-soft);
    }
  }
}
</style>
