module.exports = {
  extends: [
    "./rules/base",
    "./rules/typescript",
    "./rules/rxjs",
    "./rules/angular-a11y",
    "./rules/angular-best-practices",
    "./rules/jest",
    "./rules/karma",
    "./rules/ngrx",
  ].map(require.resolve),
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        args: "after-used",
      },
    ],
  },
};
