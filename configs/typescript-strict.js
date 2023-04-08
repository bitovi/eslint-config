module.exports = {
  extends: ["./typescript"].map(require.resolve),

  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",

    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/explicit-module-boundary-types": "error",
  },
};
