# Yet another Vite + React + Tailwind template

## Why?
I got frustrated with CRA's slow release cycle and general sluggishness so I turned to Vite for quickly bootstrapping new projects. Vite is [_fast_](https://www.darraghoriordan.com/2021/05/16/migrating-from-create-react-app-to-vite/).

## What?
This is a simple jumping-off point for working on frontend projects with, in my opinion, some sensible defaults to make life easier.

### React.js
Speaks for itself I think.

### Typescript
I will never go back; I have seen the light.

### Tailwind CSS + JIT compiler
So what if it's "_currently in preview_"? It is _fast_.

### Format-on-commit
[Everyone should be using `prettier`](https://prettier.io/docs/en/why-prettier.html). Trailing commas [good](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8), semicolons [bad](https://medium.com/@goatslacker/no-you-dont-need-semicolons-148d936b9cf2s).

### Lint-on-commit
Using Husky for git hooks, and `eslint` + `stylelint` for TS and CSS respectively. I've thrown in `eslint-plugin-simple-import-sort` for my own sanity.
