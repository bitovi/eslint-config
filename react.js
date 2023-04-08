module.exports = {
  parser: "@typescript-eslint/parser",

  settings: {
    react: {
      version: "detect",
    },
  },

  extends: [
    "./configs/base",
    "./configs/typescript-strict",
    "./configs/react-best-practices",
    "./configs/jest",
    "./configs/jsx",
  ].map(require.resolve),

  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-warning-comments": ["warn", { terms: ["todo"], location: "start" }],
  },
  overrides: [
    {
      files: ["**/*.stories.*", "**/*.test.*", "**/*.spec.*"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
