import type { RouteRecordRaw } from "vue-router";
import VerseView from "@/views/VerseView.vue";
import LemmaView from "@/views/LemmaView.vue";
// import LemmaDescription from "@/components/LemmaDescription.vue";
import AboutView from "@/views/AboutView.vue";
import LemmaOccurrences from "@/components/LemmaOccurrences.vue";
import LemmaDictionaryArticle from "@/components/LemmaDictionaryArticle.vue";
// import ContactsView from "@/views/ContactsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    // component: VerseView,
    redirect: "/verse/1:1:1",
    // component: HomeView,
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
        props: (route) => ({ sn: route.params.sn, dict: "bdb" }),
        component: LemmaDictionaryArticle,
      },
      {
        name: "lemma-gesenius-dict",
        path: "gesenius",
        // props: true,
        props: (route) => ({ sn: route.params.sn, dict: "gesenius" }),
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
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

export { routes };