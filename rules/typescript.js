module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
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
};
