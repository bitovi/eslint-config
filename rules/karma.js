const tryRequire = require("../lib/try-require");
const karma = tryRequire("karma");

module.exports = !karma
  ? {}
  : {
      env: {
        jest: true,
      },
    };
