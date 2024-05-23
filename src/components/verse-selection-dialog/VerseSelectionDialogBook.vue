<script setup lang="ts">
// import { ref } from "vue";
import { books } from "@/models/bible-helpers";

defineProps({
  vid: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(["next"]);
</script>

<template>
  <div>
    <h2>Ветхий Завет</h2>
    <div class="wrapper">
      <button v-for="i in 39" :key="i" @click="emit('next', i)">
        {{ books[i - 1]?.name }}
      </button>
    </div>

    <h2>Новый Завет</h2>
    <div class="wrapper">
      <button v-for="i in 39" :key="i" @click="emit('next', i)">
        {{ books[39 + i - 1]?.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  columns: 2;
  column-gap: 1em;

  @media (min-width: 700px) {
    columns: 3;
  }
  @media (min-width: 900px) {
    columns: 4;
  }
  @media (min-width: 1100px) {
    columns: 5;
  }

  button {
    display: block;
    border: 0;
    cursor: pointer;
  }
}
</style>
