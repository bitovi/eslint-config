module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["react", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    ...[
      "./configs/base",
      "./configs/typescript",
      "./configs/jest",
      "./configs/jsx",
    ].map(require.resolve),
  ],

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
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

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        args: "none",
      },
    ],
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
