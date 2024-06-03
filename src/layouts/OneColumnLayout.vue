<script setup lang="ts"></script>

<template>
  <div class="layout ocl">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}
</style>
