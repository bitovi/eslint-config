module.exports = {
  extends: [
    "./configs/base",
    "./configs/typescript",
    "./configs/rxjs",
    "./configs/ngrx",
    "./configs/jest",
    "./configs/karma",
    "./configs/angular-a11y",
    "./configs/angular-best-practices",
  ].map(require.resolve),
};
