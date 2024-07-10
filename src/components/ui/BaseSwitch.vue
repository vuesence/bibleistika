<script lang="ts" setup>
const model = defineModel({ type: Boolean });
</script>

<template>
  <label class="switch">
    <input v-model="model" type="checkbox">
    <span class="slider round"></span>
  </label>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  --switch-width: 36px;
  --switch-height: 19px;
  --switch-slider: 15px;
  position: relative;
  display: inline-block;
  width: var(--switch-width);
  height: var(--switch-height);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bbl-c-border);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: var(--switch-slider);
  width: var(--switch-slider);
  left: 3px;
  bottom: 2px;
  background-color: var(--bbl-c-bg-soft);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--bbl-c-brand-1);
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(var(--switch-slider));
}

/* Rounded sliders */
.slider.round {
  border-radius: var(--switch-slider);
}

.slider.round:before {
  border-radius: 50%;
}
</style>
