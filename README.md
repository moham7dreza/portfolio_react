# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## what is redux ?

- predictable state container for js apps
- predictable -> behave consistently, easy to test
- centralized -> centralize state in store which can access from anywhere in whole project
- flexible -> work with any ui layer
- debuggable -> with devtools we can trace state changes

## why we should use redux ?

- we can globally manage state in whole project
- we can write codes which testable and predictable

## when we use redux ?

- if we use redux, we should learn and write more code and may have constraints
- if we have so much states in our app which should use them in whole project
- and states are repeatedly changes over time or state implementation logic is so complex
- or we have big project with many developers work on it