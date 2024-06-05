<template>
  <button class="toggle" type="button" role="switch" aria-checked="false">
    <span class="check">
      <span v-if="$slots.default" class="icon">
        <slot />
      </span>
    </span>
  </button>
</template>

<style scoped>
.toggle {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  cursor: pointer;
  border: 1px solid var(--bbl-input-border-color);
  background-color: var(--bbl-input-switch-bg-color);
  transition: border-color 0.25s !important;

  &:hover {
    border-color: var(--bbl-c-brand-1);
  }

  .check {
    position: absolute;
    top: 1px;
    /*rtl:ignore*/
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--bbl-c-neutral-inverse);
    box-shadow: var(--bbl-shadow-1);
    transition: transform 0.25s !important;
  }

  .icon {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
  }
}

.icon :deep(svg) {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: var(--bbl-c-text-2);
}

.dark .icon :deep(svg) {
  fill: var(--bbl-c-text-1);
  transition: opacity 0.25s !important;
}
</style>
