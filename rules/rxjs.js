const tryRequire = require("../lib/try-require");
const rxjs = tryRequire("rxjs");

module.exports = !rxjs
  ? {}
  : {
      plugins: ["rxjs"],
      extends: ["plugin:rxjs/recommended"],
    };
