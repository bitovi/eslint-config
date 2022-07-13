const fs = require("fs");
const { expect } = require("expect");
const { ESLint } = require("eslint");

(async () => {
  const configFile = "react.js";

  try {
    const linter = new ESLint({ overrideConfigFile: configFile });
    const errors = await linter.lintText(fs.readFileSync(configFile, "utf8"));

    expect(errors[0].messages).toEqual([]);
  } catch (e) {
    console.error(e);
  }
})();
