# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## rules

- we can use class instances, functions or unserialized values in redux

## scripts

- json-server --watch db.json -p 9000
- concurrently "vite --port 3000" "cd server && npm start"

# prepare payload

- prepare callback function -> prepare action payload for components
- payload is object and sometimes need id or random values which created and give it to payload before send object to
  redux reducer
- we do not need to force components know what is action payload -> components work is only show and render ui
- what is solution?
- if we are creating action and action creators manually, in action creators we use thunk and communicate with server
- and define and calculate this id finally send payload to reducer
- but in redux, createSlice allow to use prepare callback function when defining reducer
- prepare callback function can receive input arguments and create random values and can run only synchronously codes
- and return object with type, payload, meta(explain action), error(bool) keys inside it