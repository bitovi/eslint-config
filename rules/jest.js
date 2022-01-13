const tryRequire = require("../lib/try-require");
const jest = tryRequire("jest");
const react = tryRequire("react");
const angular = tryRequire("@angular/core");

module.exports = !jest
  ? {}
  : {
      plugins: ["jest", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        ...(!react ? [] : ["plugin:testing-library/react"]),
        ...(!angular ? [] : ["plugin:testing-library/angular"]),
      ],
      rules: {
        "jest/no-export": "off",
        "jest/valid-expect": "off",
      },
      env: {
        jest: true,
      },
    };
