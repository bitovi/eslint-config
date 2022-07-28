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

| Rule         | angular            | react              |
| ------------ | ------------------ | ------------------ |
| angular-a11y | :white_check_mark: |                    |
| base         | :white_check_mark: | :white_check_mark: |
| jest         | :white_check_mark: | :white_check_mark: |
| jsx          |                    | :white_check_mark: |
| karma        | :white_check_mark: |                    |
| ngrx         | :white_check_mark: |                    |
| rxjs         | :white_check_mark: |                    |
| typescript   | :white_check_mark: | :white_check_mark: |

### angular-a11y

| Rule                                                                | Error Level |
| ------------------------------------------------------------------- | ----------- |
| @angular-eslint/template/accessibility-alt-text                     | error       |
| @angular-eslint/template/accessibility-elements-content             | error       |
| @angular-eslint/template/accessibility-label-has-associated-control | error       |
| @angular-eslint/template/accessibility-table-scope                  | error       |
| @angular-eslint/template/accessibility-valid-aria                   | error       |
| @angular-eslint/template/click-events-have-key-events               | warn        |
| @angular-eslint/template/mouse-events-have-key-events               | warn        |
| @angular-eslint/template/no-autofocus                               | warn        |
| @angular-eslint/template/no-distracting-elements                    | error       |
| @angular-eslint/template/no-positive-tabindex                       | error       |
| @bitovi/host-listener-click-events-have-key-events                  | warn        |
| @bitovi/host-listener-mouse-events-have-key-events                  | warn        |

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
