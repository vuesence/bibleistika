<script lang="ts" setup>
// import { ref } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  sections: {
    type: Array as PropType<{ title: string, component: any }[]>,
    default: () => [],
  },
  hidableTabs: {
    type: Boolean,
    default: true,
  },
});

const selected = defineModel<number>();

function handleClick(index) {
  selected.value = (props.hidableTabs && selected.value === index) ? -1 : index;
}
</script>

<template>
  <div class="base-tabs">
    <div class="tabs-header">
      <button
        v-for="(section, index) in sections"
        :key="index"
        class="tab-title"
        :class="{ active: selected === index }"
        @click="handleClick(index)"
        @keyup="handleClick(index)"
      >
        <slot name="tabTitle" :section="section">
          {{ section.title }}
        </slot>
      </button>
    </div>
    <div v-if="selected >= 0" class="tabs-component">
      <!-- <Transition name="fade" mode="out-in"> -->
      <slot name="tabComponent" :selected-tab="selected">
        <component :is="sections[selected].component" />
      </slot>
      <!-- </Transition> -->
    </div>
  </div>
</template>

<style scoped>
  .tabs-header {
    display: flex;
    justify-content: left;
    color: var(--bbl-c-text-2);

    .tab-title {
      text-align: center;
      cursor: pointer;
      margin-right: 2em;
      transition: all 0.2s ease-in-out;
      border: 0;

      &:hover {
        color: var(--bbl-c-text-1);
      }
      &.active {
        color: var(--bbl-c-text-1);
      }
    }
  }
</style>
