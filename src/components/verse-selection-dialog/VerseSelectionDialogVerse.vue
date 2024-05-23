<script setup lang="ts">
import { books } from "@/models/bible-helpers";

defineProps({
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
    <h3>Выберите главу</h3>
    <ul class="chapters">
      <li v-for="i in books[+book - 1].chapters[chapter - 1]" :key="i">
        <button
          class="chapter"
          @click="emit('next', i)"
        >
          {{ i }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.chapters {
  display: flex;
  flex-wrap: wrap;
  row-gap: 1em;
  column-gap: 1em;
  list-style: none;
  justify-content: center;
  .chapter {
    /* border: 0; */
    width: 3rem;
    padding: 3px 7px;
    cursor: pointer;
  }
}
</style>
