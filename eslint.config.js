import antfu from "@antfu/eslint-config";
import pluginVueA11y from "eslint-plugin-vue-a11y";

export default antfu(
  {
    ignores: [
      ".vscode/settings.json",
      ".vscode/settings.json/**",
      "src/assets/locales/*.json",
      "src/assets/locales/*.json/**",
      "public/**/*",
    ],
    rules: {
      "ts/semi": "off",
      "curly": ["error", "all"],
      "no-console": "off",
      "no-alert": "off",
      // "no-shadow": ["error", { builtinGlobals: true }],
      "no-shadow": "off",
      "vue/html-self-closing": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "style/max-len": ["error", { code: 100, tabWidth: 2 }],
      "style/semi": ["error", "always"],
      "style/indent": 2, // 4, or 'tab'
      "style/quotes": ["error", "double"],
      "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    },
  },
  {
    ignores: [
      "public/**/*",
    ],
  },
  {
    files: ["**/*.ts", "**/*.vue"],
    ignores: ["**/*.json"],
    ...pluginVueA11y.configs["flat/recommended"],
    rules: {},
  },
  {
    files: ["**/*.json", "**/*.md"],
    ignores: ["public/**/*.json"],
    rules: {
      "style/max-len": ["error", { code: 600, tabWidth: 2 }],
    },
  },
);
