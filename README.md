# @bitovi/eslint-config

Bitovi's Recommended ESLint Rule Set

## Installation

Run `npm install --save-dev @bitovi/eslint-config` or `npm i -D @bitovi/eslint-config`

## Usage

In your Project's ESLint config file, extend any of the available rules.

```
  extends: [
    '@bitovi/eslint-config/angular', // includes all angular recommended rules, see Available Rules below
    '@bitovi/eslint-config/rules/rxjs', // for specific rule usage, in this example the rxjs rules
  ]
```

## Available Rules

| Rule         | angular            | react |
| ------------ | ------------------ | ----- |
| angular-a11y | :white_check_mark: |       |
| base         | :white_check_mark: |       |
| jest         | :white_check_mark: |       |
| karma        | :white_check_mark: |       |
| ngrx         | :white_check_mark: |       |
| rxjs         | :white_check_mark: |       |
| typescript   | :white_check_mark: |       |

### angular-a11y

| Rule                                                    | Error Level |
| ------------------------------------------------------- | ----------- |
| @angular-eslint/template/accessibility-elements-content | warn        |
| @angular-eslint/template/accessibility-alt-text         | error       |
| @angular-eslint/template/accessibility-valid-aria       | error       |
| @angular-eslint/template/no-positive-tabindex           | warn        |
| @angular-eslint/template/accessibility-label-for        | warn        |
| @angular-eslint/template/click-events-have-key-events   | warn        |

### base

base rule includes `eslint:recommended`

### jest

jest rule includes `jest/recommended` and, depending if you are using angular or react, `testing-library/angular` or `testing-library/react`.

| Rule              | Error Level |
| ----------------- | ----------- |
| jest/no-export    | off         |
| jest/valid-expect | off         |

### karma

to-do

### ngrx

ngrx rule includes `ngrx/recommended`.

### rxjs

rxjs includes `rxjs/recommended`.

### typescript

typescript includes `@typescript-eslint/eslint-recommended` and `@typescript-eslint/recommended`.

| Rule                                              | Error Level                               |
| ------------------------------------------------- | ----------------------------------------- |
| @typescript-eslint/explicit-function-return-type  | off                                       |
| @typescript-eslint/no-inferrable-types            | off                                       |
| @typescript-eslint/no-use-before-define           | off                                       |
| @typescript-eslint/ban-ts-comment                 | off                                       |
| @typescript-eslint/explicit-module-boundary-types | error                                     |
| no-unused-vars                                    | off                                       |
| @typescript-eslint/no-unused-vars                 | error, ignoreRestSiblings true, args none |
