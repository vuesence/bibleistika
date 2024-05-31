import { reactive } from "vue";
import { useLocalStorage } from "@/composables/useLocalStorage";
import { setCssVar } from "@/utils/css-utils";

const ls = useLocalStorage();

let settingsDialog: HTMLDialogElement;
export const settings = reactive<Settings>(
  {
    darkMode: false,
    fontSize: "16px",
    showStrongsNumber: true,
    showStrongsLemma: true,
    highlightSearch: true,
  },
);

function toggleTheme() {
  settings.darkMode = !settings.darkMode;
  document.documentElement
    .classList[settings.darkMode ? "add" : "remove"]("dark");
}

function setSettingsDialog(sd) {
  settingsDialog = sd;
}

export function initSettings() {
  ls.init();
  ls.observe("settings", settings);

  setCssVar("--vwa-font-size", settings.fontSize);

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (settings.darkMode || prefersDark) {
    document.documentElement.classList.add("dark");
  }
}

export function useAppSettings() {
  function openSettingsDialog() {
    settingsDialog.show();
  }

  return {
    settings,
    openSettingsDialog,
    initSettings,
    setSettingsDialog,
    toggleTheme,
  };
}
