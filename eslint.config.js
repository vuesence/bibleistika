import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: [
    ".vscode/settings.json",
    ".vscode/settings.json/**",
    "src/assets/locales/*.json",
    "src/assets/locales/*.json/**",
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
    "style/max-len": ["error", { code: 90, tabWidth: 2 }],
    "style/semi": ["error", "always"],
    "style/indent": 2, // 4, or 'tab'
    "style/quotes": ["error", "double"],
    "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
  },
});
