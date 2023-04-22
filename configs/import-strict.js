module.exports = {
  extends: ["./import"].map(require.resolve),

  settings: {
    "import/internal-regex": "^@shared/",
  },

  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
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
