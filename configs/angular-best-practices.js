module.exports = {
  plugins: ["@angular-eslint"],
  overrides: [
    {
      files: ["*.html"],
      plugins: ["@angular-eslint/template"],
      rules: {
        "@angular-eslint/template/banana-in-box": "error",
        "@angular-eslint/template/button-has-type": "warn",
        "@angular-eslint/template/conditional-complexity": "warn",
        "@angular-eslint/template/cyclomatic-complexity": "warn",
        "@angular-eslint/template/eqeqeq": [
          "error",
          {
            allowNullOrUndefined: true,
          },
        ],
        "@angular-eslint/template/no-any": "error",
        "@angular-eslint/template/no-call-expression": "error",
        "@angular-eslint/template/no-duplicate-attributes": "error",
        "@angular-eslint/template/no-negated-async": "warn",
        "@angular-eslint/template/use-track-by-function": "warn",
      },
    },
  ],
};
