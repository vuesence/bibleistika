import type { RouteRecordRaw } from "vue-router";
import VerseView from "@/views/VerseView.vue";
import HomeView from "@/views/HomeView.vue";
import HelpView from "@/views/HelpView.vue";
import HelpAbout from "@/components/help/HelpAbout.vue";
import HelpUsage from "@/components/help/HelpUsage.vue";
import HelpExample from "@/components/help/HelpExample.vue";
import LemmaView from "@/views/LemmaView.vue";
import SearchView from "@/views/SearchView.vue";
import LemmaOccurrences from "@/components/LemmaOccurrences.vue";
import LemmaDictionaryArticle from "@/components/LemmaDictionaryArticle.vue";

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   name: "home",
  //   // component: VerseView,
  //   redirect: "/verse/1:1:1",
  //   // component: HomeView,
  // },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/verse",
    // props: true,
    name: "verse0",
    // component: VerseView,
    redirect: "/verse/1:1:1",
  },
  {
    path: "/verse/:vid",
    props: true,
    name: "verse",
    component: VerseView,
  },
  {
    path: "/verse/:vid/:sn",
    props: true,
    name: "verse-lemma",
    component: VerseView,
    children: [
      {
        name: "verse-lemma-occurrences",
        path: "occurrences",
        props: true,
        component: LemmaOccurrences,
      },
      {
        name: "lemma-bdb-dict",
        path: "bdb",
        props: route => ({ sn: route.params.sn, dict: "bdb" }),
        component: LemmaDictionaryArticle,
      },
      {
        name: "lemma-gesenius-dict",
        path: "gesenius",
        // props: true,
        props: route => ({ sn: route.params.sn, dict: "gesenius" }),
        component: LemmaDictionaryArticle,
      },
    ],
  },
  {
    path: "/lemma/:sn",
    props: true,
    name: "lemma",
    component: LemmaView,
  },
  {
    path: "/search",
    name: "search-view",
    component: SearchView,
  },
  {
    path: "/search/:searchString",
    props: true,
    name: "search",
    component: SearchView,
  },
  {
    path: "/help",
    name: "help",
    component: HelpView,
    redirect: "/help/about",
    children: [
      {
        name: "help-about",
        path: "about",
        component: HelpAbout,
      },
      {
        name: "help-usage",
        path: "usage",
        component: HelpUsage,
      },
      {
        name: "help-example",
        path: "example",
        component: HelpExample,
      },
    ],
  },
];

export { routes };
