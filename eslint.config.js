import vue from "eslint-plugin-vue";
import typescriptParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["node_modules", "dist"], // Ignorar estas carpetas
  },
  {
    files: ["*.vue", "*.js", "*.ts"],
    languageOptions: {
      parser: typescriptParser,
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      vue,
      "@typescript-eslint": typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...vue.configs.recommended.rules,
      "vue/multi-word-component-names": "off", // Ejemplo: Desactiva esta regla
    },
  },
];
