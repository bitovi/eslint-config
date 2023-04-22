# @bitovi/eslint-config

Bitovi's Recommended ESLint Rule Set

## Installation

Run `npm install --save-dev @bitovi/eslint-config`

## Usage

This package ships with several primary configs, containing our full reccomendations for that stack. You will usually want to use one of these directly.

* angular
* react

In your Project's ESLint config file, extend one of them.

```
  extends: [
    "@bitovi/eslint-config/angular",
  ]
```

## Advanced Usage

If you only want a portion of our config or want more fine-grained control, you can access each of our smaller configs direction. In your Project's ESLint config file, extend any of the available configs.

```
  extends: [
    "@bitovi/eslint-config/configs/rxjs",
    "@bitovi/eslint-config/configs/jest",
  ]
```

## Available Configs

| Config                 | angular            | react              |
| ---------------------- | ------------------ | ------------------ |
| angular-a11y           | :white_check_mark: |                    |
| angular-best-practices | :white_check_mark: |                    |
| base                   | :white_check_mark: | :white_check_mark: |
| import                 |                    | :white_check_mark: |
| jest                   | :white_check_mark: | :white_check_mark: |
| karma                  | :white_check_mark: |                    |
| ngrx                   | :white_check_mark: |                    |
| react-best-practices   |                    | :white_check_mark: |
| rxjs                   | :white_check_mark: |                    |
| typescript             | :white_check_mark: | :white_check_mark: |
| typescript-strict      |                    | :white_check_mark: |

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
| @bitovi/angular/host-listener-click-events-have-key-events          | warn        |
| @bitovi/angular/host-listener-mouse-events-have-key-events          | warn        |

### angular-best-practices

| Rule                                             | Error Level |
| ------------------------------------------------ | ----------- |
| @angular-eslint/template/banana-in-box           | error       |
| @angular-eslint/template/button-has-type         | warn        |
| @angular-eslint/template/conditional-complexity  | warn        |
| @angular-eslint/template/cyclomatic-complexity   | warn        |
| @angular-eslint/template/eqeqeq                  | error       |
| @angular-eslint/template/no-any                  | error       |
| @angular-eslint/template/no-call-expression      | error       |
| @angular-eslint/template/no-duplicate-attributes | error       |
| @angular-eslint/template/no-negated-async        | warn        |
| @angular-eslint/template/use-track-by-function   | warn        |

### base

base config includes `eslint:recommended`

### jest

jest config includes `jest/recommended` and, depending if you are using angular or react, `testing-library/angular` or `testing-library/react`.

| Rule              | Error Level |
| ----------------- | ----------- |
| jest/no-export    | off         |
| jest/valid-expect | off         |


### ngrx

ngrx config includes `ngrx/recommended` if @ngrx/store or @ngrx/component-store version is less than 14.
Otherwise, ngrx config includes `@ngrx/recommended`.

### rxjs

rxjs includes `rxjs/recommended`.

### typescript

typescript includes `@typescript-eslint/eslint-recommended` and `@typescript-eslint/recommended`.

## Connect With US

Come chat with us or ask questions in our Bitovi community [Discord](https://discord.gg/J7ejFsZnJ4).

See what we're up to by following us on [Twitter](https://twitter.com/bitovi).
