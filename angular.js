module.exports = {
  extends: [
    "./configs/base",
    "./configs/typescript",
    "./configs/rxjs",
    "./configs/angular-a11y",
    "./configs/angular-best-practices",
    "./configs/jest",
    "./configs/karma",
    "./configs/ngrx",
  ].map(require.resolve),
};
