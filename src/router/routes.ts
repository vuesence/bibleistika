import type { RouteRecordRaw } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
import VerseView from "@/views/VerseView.vue";
import WordDescription from "@/components/WordDescription.vue";
import AboutView from "@/views/AboutView.vue";
import ContactsView from "@/views/ContactsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: VerseView,
    // component: HomeView,
  },
  {
    path: "/verse/:id",
    props: true,
    name: "verse",
    component: VerseView,
  },
  {
    path: "/verse/:id/:sn",
    props: true,
    name: "verse-word",
    component: VerseView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

export { routes };
