import html from "eslint-plugin-html";

export default [
  {
    files: ["index.html"],
    plugins: { html },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script"
    },
    rules: {
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-unreachable": "error",
      "no-unexpected-multiline": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "valid-typeof": "error"
    }
  }
];