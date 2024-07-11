import type { IHtmlInjectionConfig } from "vite-plugin-html-injection";

export const htmlInjectionConfig: IHtmlInjectionConfig = {
  injections: [
    {
      name: "Open Graph",
      path: "./src/utils/injections/open-graph.html",
      type: "raw",
      injectTo: "head",
    },
    {
      name: "Splash screen",
      path: "./src/utils/injections/splash-screen.html",
      type: "raw",
      injectTo: "body-prepend",
      buildModes: "prod",
    },
    {
      name: "Splash screen / logo.svg",
      path: "./src/utils/injections/logo.svg",
      type: "raw",
      injectTo: "body-prepend",
    },
    {
      name: "Splash screen / title.svg",
      path: "./src/utils/injections/title.svg",
      type: "raw",
      injectTo: "body-prepend",
    },
    {
      name: "Service worker",
      path: "./src/utils/injections/sw.js",
      type: "js",
      injectTo: "head",
      buildModes: "prod",
    },
    {
      name: "Google Analytics",
      path: "./src/utils/injections/ga.html",
      type: "raw",
      injectTo: "body",
      buildModes: "prod",
    },
  ],
};
