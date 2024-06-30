<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "./ui/BaseIcon.vue";
import { router } from "@/router";
// import BaseSwitch from "@/components/ui/BaseSwitch.vue";

// const props = defineProps({
//   vid: {
//     type: String,
//     default: null,
//   },
// });

// import { chapterAndVerseId, getBookName, nextVerseId, prevVerseId }
//   from "@/utils/bibleUtils";
// import { router } from "@/router";

const modelValue = ref("");
// const searchMode = ref(false);
function doSearch() {
  if (modelValue.value) {
    router.push({
      name: "search",
      params: { searchString: modelValue.value },
      // params: { searchString: modelValue.value, searchMode: searchMode.value ? "all" : "any" },
    });
  }
}
</script>

<template>
  <div class="search-bar">
    <div class="search-field">
      <label>
        <input
          v-model="modelValue"
          autofocus
          name="search"
          type="text"
          placeholder="Поиск.."
          autocomplete="off"
          @keypress.enter="doSearch"
        />
      </label>
    </div>
    <div class="search-button">
      <button @click="doSearch">
        <BaseIcon size="20" name="search-magnifier" class="icon" />
      </button>
    </div>
  </div>
  <!-- <div class="search-mode">
    <span>Искать {{ searchMode ? "все слова&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "любое слово" }}</span>
    <BaseSwitch v-model="searchMode" class="switch" />
  </div> -->
  <div class="note">
    <p>
      Поиск морфологический. Выдача будет
      включать не только сам запрос, но и словоформы из него.
    </p>
    <p>
      Искать можно по слову и по фразе.
      При поиске по фразе поиск будет всех слов во фразе, в любом их порядке.
    </p>
    <p>
      Минимальная длина слова - три буквы.
    </p>
  </div>
</template>

<style scoped>
.search-bar {
    display: flex;
    transition: all 0.3s ease-in-out;
    margin: auto;
    .search-field {
        overflow: hidden;
        height: 100%;

        input {
            width: 100%;
            height: 100%;
            padding: 5px 19px;
            font-size: 15px;
            vertical-align: middle;
            background-color: var(--bbl-c-bg-soft);
            /* // border: 1px solid var(--bbl-c-border); */
            border: 1px solid var(--bbl-c-divider);
            border-right: 0;
            border-radius: 4px 0 0 4px;
            line-height: 1;
            outline: 0;
            box-shadow: none;
            appearance: none;
            transition: all 0.3s ease-in-out;
        }
    }

    .search-button {
        position: relative;
        /* // height: 100%; */

        button {
            height: 100%;
            background-color: var(--bbl-c-brand-3) ;
            /* // border: none; */
            border-radius: 0 4px 4px 0;
            border-color: var(--bbl-c-divider);
            cursor: pointer;
            color: var(--bbl-c-bg-alt);
            padding: 0.10em 1.5em;
            display: flex;
            align-items: center;
            user-select: none;
            transition: all 0.3s ease-in-out;
            &:active {
              background-color: var(--bbl-c-brand-3) ;
              border-color: var(--bbl-c-brand-3) ;
              transition: all 0.1s ease-in-out;
            }
        }
    }
    &:focus-within {
        & button {
            /* // color: var(--group-color-focus); */
            background-color: var(--bbl-c-brand-1) ;
            /* // border-color: #777; */
            border-color: var(--bbl-c-brand-1) ;
            color: var(--bbl-c-bg);

        }
        & input {
            /* // color: var(--group-color-focus); */
            border-color: var(--bbl-c-brand-1) ;
        }
    }
}
.search-mode {
  margin: 0.8em auto;
  display: flex;
  align-items: center;
  span {
    margin-right: 1em;
    /* margin-left: 1em; */
    font-size: 0.7em;
    color: var(--bbl-c-text-2);
  }
  .switch {
    transform: scaleY(0.8);
  }
}
.note {
  color: car(--bbl-c-text-3);
  font-size: 0.8em;
  margin-top: 2em;
  p {
    margin: 0.2em auto;
  }
}
</style>
