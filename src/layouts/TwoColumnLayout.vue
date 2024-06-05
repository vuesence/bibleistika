<script setup lang="ts"></script>

<template>
  <div class="layout tcl">
    <section class="top">
      <slot name="top" />
    </section>

    <section class="aside">
      <slot name="aside" />
    </section>

    <section class="bottom">
      <slot name="bottom" />
    </section>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  .mobile &, .tablet & {
    display: flex;
    flex-direction: column;
  }
}

/* .top, .aside, .bottom {
  border: 1px solid rgb(199, 199, 199);
} */

.top {
  grid-column: 1 / 5;
  grid-row: 1;
  & :deep(.verse .uri) {
    display: none;
  }
  & :deep(.verse .anchor) {
    display: none;
  }

}

.aside {
  grid-column: 5 / 7;
  grid-row: 1 / 5;
}

.bottom {
  grid-column: 1 / 5;
  grid-row: 2;
}
</style>
