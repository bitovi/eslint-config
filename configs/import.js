module.exports = {
  plugins: ["import"],
  extends: ["plugin:import/recommended", "plugin:import/typescript"],

  rules: {
    "import/no-unresolved": "off",

    "@typescript-eslint/consistent-type-imports": "error",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-useless-path-segments": "error",
  },
};
