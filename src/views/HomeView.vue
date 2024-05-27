<script setup lang="ts">
import { onMounted } from "vue";
// import { api } from "@/services/api";

// interface IOption {
//   name: string
//   value: string
// }

// const apiData = ref();

onMounted(async () => {
  // apiData.value = await api.utils.testRest();
});
</script>

<template>
  <div>
    <h2>Congratulations with scaffolding your vue webapp!</h2>
  </div>
</template>

<style scoped>
ul {
  color: var(--vwa-c-text-2);
  border: 1px solid var(--vwa-c-divider);
  margin-bottom: 2em;

  li {
    padding: .4rem;
    display: flex;

    &:nth-child(even) {
      background-color: var(--vwa-c-bg-alt);
    }

    &.dimmed {
      opacity: 0.5;
    }

    span {
      width: 50%;
    }
  }
}

button {
  padding: 0.3em 1em;
}
</style>
