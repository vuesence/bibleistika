import { createApp } from "vue";

// import "./assets/styles/vars.css";
// import "./styles/base.css";

import "./assets/styles/base.scss";
import "./assets/styles/custom.scss";
import FloatingVue from "floating-vue";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";
import { initAppearance } from "@/composables/useAppConfig";
import { api } from "@/services/api";
import { loadStrongsConcordance } from "@/composables/useStrongsConcordance";
import "floating-vue/dist/style.css";

loadStrongsConcordance();

const app = createApp(App);
app.use(router);
loadIcons();
initAppearance();
api.init();
app.use(FloatingVue);

await Promise.all([router.isReady()]);
// await Promise.all([router.isReady(), loadStrongsConcordance()]);

app.mount("#app");
