import type { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VerseView from "@/views/VerseView.vue";
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
    path: "/verse",
    name: "verse",
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
