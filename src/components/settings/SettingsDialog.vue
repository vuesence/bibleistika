<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import VerseSection from "./VerseSection.vue";
import TypographySection from "./TypographySection.vue";
// import ThemeToggle from "@/components/ui/ThemeToggle.vue";

// const props = defineProps({
//   token: {
//     type: Object as () => VerseToken,
//     required: true,
//   },
// });

const dialog = ref(null);

function show() {
  dialog.value.showModal();
}
function close() {
  console.log("ccc");

  dialog.value.close();
}

defineExpose({ show, close });

function onClick($event) {
  if ($event.target === dialog.value
    || $event.target === dialog.value.querySelector(".close-btn")
  ) {
    dialog.value.close();
  }
}

// const popover = ref();
// const showTooltip = ref(false);
</script>

<template>
  <dialog ref="dialog" role="textbox" tabindex="0" @click="onClick" @keydown="() => {}">
    <div>
      <header>
        <h3>Настройки</h3>
        <BaseButton class="close-btn">
          Close
        </BaseButton>
      </header>

      <TypographySection />
      <VerseSection />

      <!-- <ThemeToggle /> -->
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  padding: 0;
  color: var(--bbl-c-text-1);
  border: 3px solid var(--bbl-c-border);
  > div {
    padding: 0 1em 1em ;
    display: flex;
    flex-direction: column;
    header {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  /* section {
    width: 100%;
    padding-top: 1em;
  } */
}

/*   Open state of the dialog  */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
}

/*   Closed state of the dialog   */
dialog {
  opacity: 0;
  transform: scaleY(0.6);
  transition:
    opacity 0.1s ease-out,
    transform 0.1s ease-out,
    overlay 0.1s ease-out allow-discrete,
    display 0.1s ease-out allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/*   Before-open state  */
/* Needs to be after the previous dialog[open] rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scaleY(0.6);
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.4s allow-discrete,
    overlay 0.4s allow-discrete,
    background-color 0.3s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
</style>
