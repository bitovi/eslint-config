module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: ["react", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    ...[
      "./rules/base",
      "./rules/typescript",
      "./rules/jest",
      "./rules/jsx",
    ].map(require.resolve),
  ],

  rules: {
    "react/display-name": "off",
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

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    "@typescript-eslint/explicit-module-boundary-types": "error",

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
      files: ["**/*.stories.*", "**/*.test.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
