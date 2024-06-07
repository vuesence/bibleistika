import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { htmlInjectionPlugin } from "vite-plugin-html-injection";
import { htmlInjectionConfig } from "./src/utils/injections/injection-config";

// import { URL, fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // enable hydration mismatch details in production build
    __VUE_OPTIONS_API__: "true",
  },
  // base: "/bibleistika/",
  build: {
    target: "esnext",
  },
  plugins: [vue(), htmlInjectionPlugin(htmlInjectionConfig)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
