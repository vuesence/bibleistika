<script setup lang="ts">
// import { ref } from "vue";
import { books } from "@/utils/bibleUtils";

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
      <button v-for="i in 39" :key="i" @click="emit('next', 39 + i)">
        {{ books[39 + i - 1]?.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  columns: 5;
  column-gap: 1em;

  .mobile & {
    columns: 2;
  }
  .tablet & {
    columns: 3;
  }
  .notebook & {
    columns: 4;
  }

  button {
    display: block;
    border: 0;
    cursor: pointer;
  }
}
</style>
