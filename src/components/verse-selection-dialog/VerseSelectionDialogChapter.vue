<script setup lang="ts">
import { books } from "@/models/bible-helpers";

defineProps({
  book: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(["next"]);
</script>

<template>
  <div>
    <h2>{{ books[+book - 1].name }}</h2>
    <h4>Выберите главу</h4>
    <ul class="chapters">
      <li v-for="i in books[+book - 1].chapters.length" :key="i">
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
h2 {
  margin: 0 auto;
}
h4 {
  margin-top: 0.3em;
}
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
