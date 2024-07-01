<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/dom";
import { getSC } from "@/composables/useStrongsConcordance";

const props = defineProps({
  sc: {
    type: Object as () => StrongsConcordance,
    required: true,
  },
});

const popover = ref();
// let timeout;

// defineExpose({ hideTooltip });

// function showTooltip() {
//   timeout = setTimeout(() => {
//     // const arrowEl = popover.value.querySelector("#arrow");
//     popover.value.showPopover();
//     computePosition(popover.value.parentElement, popover.value, {
//       placement: "bottom",
//       middleware: [
//         flip(),
//         shift({ padding: 5 }),
//         offset(10),
//       ],
//     }).then(({ x, y }) => {
//       Object.assign(popover.value.style, {
//         left: `${x}px`,
//         top: `${y}px`,
//       });
//     });
//   }, 300);
// }
onMounted(() => {
  popover.value.showPopover();
  computePosition(popover.value.parentElement, popover.value, {
    placement: "bottom",
    middleware: [
      flip(),
      shift({ padding: 5 }),
      offset(10),
    ],
  }).then(({ x, y }) => {
    Object.assign(popover.value.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
});
// function hideTooltip() {
//   popover.value.hidePopover();
//   // clearTimeout(timeout);
// }

function buildPreview(desc) {
  let str = "";
  const lines = desc.split(";");
  // console.log(line[1]);
  str += lines[0];

  if (lines.length > 1 && lines[1].startsWith("<br>")) {
    str += lines[1];
  }
  return str;
}
// console.log(props.token);
</script>

<template>
  <div
    :id="`popover-${props.sc.sn}`"
    ref="popover"
    class="popover"
    popover
    role="tooltip"
  >
    <div class="title">
      <span class="lemma">{{ props.sc.lemma }}</span>
      <span class="strongs-number">({{ props.sc.sn }})</span>
    </div>
    <div class="desc" v-html="buildPreview(getSC(props.sc.sn).desc)" />
    <!-- <div id="arrow"></div> -->
  </div>
</template>

<style scoped>
  .popover {
    position: absolute;
    width: max-content;
    top: 0;
    left: 0;
    margin: 0;
    padding: 1em;
    text-align: left;
    border: 1px solid var(--bbl-c-border);
    border-radius: 5px;
    background: var(--bbl-c-bg-alt);
    color: var(--bbl-c-text-1);
    max-width: 400px;
    box-shadow: var(--bbl-shadow-3);
    /* max-height: 170px; */

    .title {
      margin-bottom: 5px;

      .lemma {
        font-weight: 700;
      }

      .strongs-number {
        color: var(--bbl-c-text-1);
        margin-left: 1em;
        font-size: 0.8em;
      }
    }

    /* // #arrow {
  //   position: absolute;
  //   width: 20px;
  //   height: 20px;
  //   background: red;
  //   z-index: -1;
  //   pointer-events: none;
  //   transform: rotate(45deg);
  // } */
  }
</style>
