const tryRequire = require("../lib/try-require");
const react = tryRequire("react");

module.exports = {
  plugins: ["jsx-a11y"],
  extends: [
    "plugin:jsx-a11y/recommended",
    ...(!react ? [] : ["plugin:react/jsx-runtime"]),
  ],
};
