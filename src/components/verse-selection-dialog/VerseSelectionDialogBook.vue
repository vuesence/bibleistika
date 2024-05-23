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
    <h2>Books</h2>

    <h3>Ветхий Завет</h3>

    <div v-for="i in 39" :key="i" @click="emit('next', i)">
      {{ books[i - 1]?.name }}
    </div>
    <h3>Новый Завет</h3>
    <div v-for="i in 39" :key="i" @click="emit('next', i)">
      {{ books[39 + i - 1]?.name }}
    </div>
  </div>
</template>

<style scoped></style>
