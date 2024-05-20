import type { RouteRecordRaw } from "vue-router";
import VerseView from "@/views/VerseView.vue";
import WordView from "@/views/WordView.vue";
// import WordDescription from "@/components/WordDescription.vue";
import AboutView from "@/views/AboutView.vue";
// import ContactsView from "@/views/ContactsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: VerseView,
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
    name: "verse-word",
    component: VerseView,
  },
  {
    path: "/word/:sn",
    props: true,
    name: "word",
    component: WordView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

export { routes };
