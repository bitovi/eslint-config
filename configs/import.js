module.exports = {
  plugins: ["import"],
  extends: ["plugin:import/recommended", "plugin:import/typescript"],

  settings: {
    "import/internal-regex": "^@shared/",
  },

  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-absolute-path": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/order": [
      "error",
      {
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
      },
    ],
  },
};
