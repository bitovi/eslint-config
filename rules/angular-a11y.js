module.exports = {
  plugins: ["@angular-eslint"],
  overrides: [
    {
      files: ["*.html"],
      plugins: ["@angular-eslint/template"],
      rules: {
        "@angular-eslint/template/accessibility-elements-content": "warn",
        "@angular-eslint/template/accessibility-alt-text": "error",
        "@angular-eslint/template/accessibility-valid-aria": "error",
        "@angular-eslint/template/no-positive-tabindex": "warn",
        "@angular-eslint/template/accessibility-label-for": "warn",
        "@angular-eslint/template/click-events-have-key-events": "warn",
      },
    },
  ],
};
