import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import astro from "eslint-plugin-astro";

export default defineConfig([
  globalIgnores(["dist/", ".astro/", "node_modules/"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  // Hooks rules, including the React Compiler checks (e.g. no mutation of
  // values defined outside a component)
  {
    files: ["**/*.{ts,tsx}"],
    extends: [reactHooks.configs.flat["recommended-latest"]],
  },
  astro.configs.recommended,
]);
