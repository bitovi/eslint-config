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
          parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true,
          },
        },
      ],
    };
