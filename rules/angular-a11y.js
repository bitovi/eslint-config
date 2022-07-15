module.exports = {
  plugins: ["@angular-eslint"],
  overrides: [
    {
      files: ["*.html"],
      plugins: ["@angular-eslint/template"],
      rules: {
        "@angular-eslint/template/accessibility-alt-text": "error",
        "@angular-eslint/template/accessibility-elements-content": "error",
        "@angular-eslint/template/accessibility-label-has-associated-control":
          "error",
        "@angular-eslint/template/accessibility-table-scope": "error",
        "@angular-eslint/template/accessibility-valid-aria": "error",
        "@angular-eslint/template/click-events-have-key-events": "warn",
        "@angular-eslint/template/mouse-events-have-key-events": "warn",
        "@angular-eslint/template/no-autofocus": "warn",
        "@angular-eslint/template/no-distracting-elements": "error",
        "@angular-eslint/template/no-positive-tabindex": "error",
      },
    },
  ],
};
