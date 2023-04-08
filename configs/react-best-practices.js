module.exports = {
  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],

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
