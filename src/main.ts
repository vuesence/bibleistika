import { createApp } from "vue";

// import "./assets/styles/vars.css";
// import "./styles/base.css";

import "./assets/styles/base.scss";
import "./assets/styles/custom.scss";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";
import { initAppearance } from "@/composables/useAppConfig";
import { api } from "@/services/api";
import { useStrongsConcordance } from "@/composables/useStrongsConcordance";

useStrongsConcordance().load();

const app = createApp(App);
app.use(router);
loadIcons();
initAppearance();
api.init();

await Promise.all([router.isReady()]);
// await Promise.all([router.isReady(), loadStrongsConcordance()]);

app.mount("#app");
