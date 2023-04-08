module.exports = {
  extends: [
    "./configs/base",
    "./configs/typescript",
    "./configs/rxjs",
    "./configs/angular-a11y",
    "./configs/angular-best-practices",
    "./configs/jest",
    "./configs/karma",
    "./configs/ngrx",
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
