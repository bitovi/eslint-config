module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },

  extends: [
    "./rules/base",
    "./rules/typescript",
    "./rules/jest",
    "./rules/jsx",
  ].map(require.resolve),

  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  rules: {
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",

    "no-use-before-define": "off",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-warning-comments": [
      "warn",
      {
        terms: ["todo"],
        location: "start",
      },
    ],
  },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      rules: {
        "react/display-name": "off",
      },
    },
  ],
};
