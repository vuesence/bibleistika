<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";

const links = [
  // { title: "Contact", route: { name: "contacts" } },
  { title: "Главная", route: { name: "home" } },
  { title: "Справка", route: { name: "help" } },
  { title: "Поиск", route: { name: "search-view" } },
];

const socials = [
  { name: "telegram", title: "Связаться с автором", url: "https://t.me/RuslanMakarov" },
  // { name: "youtube", url: "https://youtube.com/acme" },
  // { name: "instagram", url: "https://instagram.com/acme" },
];
</script>

<template>
  <!-- eslint-disable style/max-len -->
  <footer class="footer">
    <div class="logo">
      <BaseIcon size="26" name="logo" class="icon" />
      <!-- <div class="title"> -->
      <svg class="title" viewBox="0 0 1194.000000 229.000000">
        <use xlink:href="#title"></use>
      </svg>
      <!-- </div> -->
    </div>
    <div class="links">
      <RouterLink v-for="link in links" :key="link.title" class="link" :to="link.route">
        {{ link.title }}
      </RouterLink>
    </div>
    <div class="socials">
      <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
        <button :title="social.title">
          <BaseIcon size="18" :name="social.name" fill11="none" />
        </button>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 1rem;
  border-top: 1px solid var(--bbl-c-border);
  align-items: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  .logo {
    max-width: 200px;
    display: flex;
    align-items: center;
    .mobile & {
      max-width: 140px;
    }

    .title {
      margin-left: 0.6rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--bbl-c-text-1);
      width: 5em;
    }
  }

  .links {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    .link {
      display: block;
      appearance: none;
      text-decoration: none;
      color: var(--bbl-c-text-2);
      margin: 5px 10px;
      -webkit-tap-highlight-color: var(--bbl-c-bg);
      font-size: 0.8rem;

      &:hover {
        color: var(--bbl-c-text-1);
      }
    }
  }

  .socials {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;

    button {
      appearance: none;
      background: var(--bbl-c-bg) none repeat scroll 0% 0% / auto padding-box border-box;
      border: 1px solid var(--bbl-c-border);
      border-radius: 42px;
      color: var(--bbl-c-text-2);
      cursor: pointer;
      -webkit-tap-highlight-color: var(--bbl-c-bg);
      /* background-color: var(--bbl-c-bg); */
      padding: 7px;
      touch-action: manipulation;

      &:hover {
        background-color: var(--bbl-c-bg-soft);
      }
    }
  }
}

.mobile,
.tablet {
  .footer {
    flex-direction: column;

    .links {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
