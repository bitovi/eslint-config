const tryRequire = require("../lib/try-require");
const ngrxStore = tryRequire("@ngrx/store/package.json");
const ngrxComponentStore = tryRequire("@ngrx/component-store/package.json");
const ngrx = ngrxStore || ngrxComponentStore;

const getPackageMajorVersion = (package) => {
  if (!package) return;

  return parseInt(package.version.split(".")[0]);
};

module.exports = !ngrx
  ? {}
  : (() => {
      const ngrxStoreVersion = getPackageMajorVersion(ngrxStore);
      const ngrxComponentStoreVersion =
        getPackageMajorVersion(ngrxComponentStore);

      if (ngrxStoreVersion < 14 || ngrxComponentStoreVersion < 14) {
        return {
          overrides: [
            {
              files: ["*.ts"],
              plugins: ["ngrx"],
              extends: ["plugin:ngrx/recommended"],
            },
          ],
        };
      }

      return {
        overrides: [
          {
            files: ["*.ts"],
            extends: ["plugin:@ngrx/recommended"],
          },
        ],
      };
    })();
