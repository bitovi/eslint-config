const tryRequire = require("../lib/try-require");
const rxjs = tryRequire("rxjs");

module.exports = !rxjs
  ? {}
  : {
      overrides: [
        {
          files: ["*.ts"],
          plugins: ["rxjs"],
          extends: ["plugin:rxjs/recommended"],
          parser: "@typescript-eslint/parser",
          parserOptions: {
            ecmaVersion: 2019,
            project: ["./tsconfig.*?.json"],
            sourceType: "module",
          },
        },
      ],
    };
