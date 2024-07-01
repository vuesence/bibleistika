import { createApp } from "vue";

// import "./assets/styles/vars.css";
// import "./styles/base.css";

import "./assets/styles/base.css";
// import "./assets/styles/custom.css";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";
import { initSettings } from "@/composables/useAppSettings";
import { api } from "@/services/api";
import { loadStrongsConcordance } from "@/composables/useStrongsConcordance";

// loadStrongsConcordance();

const app = createApp(App);
app.use(router);
loadIcons();
initSettings();
api.init();

// await Promise.all([router.isReady()]);
await Promise.all([router.isReady(), loadStrongsConcordance()]);

app.mount("#app");
