module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
  ],

  rules: {
    "react/no-unknown-property": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["*.html"],
      plugins: ["@angular-eslint/template"],
      rules: {
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
      },
    },
  ],
};
