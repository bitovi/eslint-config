module.exports = function tryRequire(package) {
  try {
    return require(package);
  } catch (er) {
    return undefined;
  }
};
