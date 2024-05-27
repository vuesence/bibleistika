<script setup lang="ts">
import { ref } from "vue";
import {
  arrow,
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/dom";
import { getSC } from "@/composables/useStrongsConcordance";

const props = defineProps({
  token: {
    type: Object as () => VerseToken,
    required: true,
  },
});

const popover = ref();
let timeout;

defineExpose({ showTooltip, hideTooltip });

function showTooltip() {
  timeout = setTimeout(() => {
    // const arrowEl = popover.value.querySelector("#arrow");
    popover.value.showPopover();
    computePosition(popover.value.parentElement, popover.value, {
      placement: "bottom",
      // middleware: [flip(), shift({ padding: 5 }), offset(6)],
      middleware: [
        flip(),
        shift({ padding: 5 }),
        offset(10),
        // arrow({ element: arrowEl, padding: 5 }),
      ],
    }).then(({ x, y }) => {
      // console.log(middlewareData.arrow);

      // if (middlewareData.arrow) {
      //   // const { x, y } = middlewareData.arrow;

      //   Object.assign(arrowEl.style, {
      //     left: x != null ? `${middlewareData.arrow.x}px` : "",
      //     top: y != null ? `${middlewareData.arrow.y}px` : "",
      //   });
      // }
      // console.log(x, y);
      Object.assign(popover.value.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }, 100);
}
function hideTooltip() {
  popover.value.hidePopover();
  clearTimeout(timeout);
}

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
</script>

<template>
  <div
    v-if="props.token.sc"
    :id="`popover-${props.token.sn}`"
    ref="popover"
    class="popover"
    popover
    role="tooltip"
  >
    <div class="title">
      <span class="word">{{ props.token.sc.word }}</span>
      <span class="strongs-number">({{ props.token.sc.sn }})</span>
    </div>
    <div class="desc" v-html="buildPreview(getSC(props.token.sn).desc)" />
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
    border: 1px solid var(--vwa-c-border);
    border-radius: 5px;
    background: var(--vwa-c-bg-alt);
    color: var(--vwa-c-text-1);
    max-width: 400px;
    box-shadow: var(--vwa-shadow-3);
    /* max-height: 170px; */

    .title {
      margin-bottom: 5px;

      .word {
        font-weight: 600;
      }

      .strongs-number {
        color: var(--vwa-c-text-1);
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
