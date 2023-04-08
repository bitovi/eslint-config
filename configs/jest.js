const tryRequire = require("../lib/try-require");
const jest = tryRequire("jest");
const react = tryRequire("react");
const angular = tryRequire("@angular/core");

module.exports = !jest
  ? {}
  : {
      plugins: [
        "jest",
        "testing-library",
      ],
      extends: [
        "plugin:jest/recommended",
        ...(!react ? [] : ["plugin:testing-library/react"]),
        ...(!angular ? [] : ["plugin:testing-library/angular"]),
      ],
      rules: {
        "jest/consistent-test-it": "error",
        "jest/prefer-hooks-in-order": "error",
        "jest/prefer-hooks-on-top": "error",
        "testing-library/prefer-user-event": "error",
        "testing-library/prefer-wait-for": "error",
      },
      env: {
        jest: true,
      },
    };
