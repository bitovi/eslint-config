const tryRequire = require("../lib/try-require");
const ngrxStore = tryRequire("@ngrx/store");
const ngrxComponent = tryRequire("@ngrx/component-store");
const ngrx = ngrxStore || ngrxComponent;

module.exports = !ngrx
  ? {}
  : {
      overrides: [
        {
          files: ["*.ts"],
          plugins: ["ngrx"],
          extends: ["plugin:ngrx/recommended"],
        },
      ],
    };
