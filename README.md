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

## One-way data flow in react

- state is determined app status in specific time
- ui is rendered depends on state
- depending on actions on app, state is changed or updated
- ui is rerendered depending on new state

## One-way data flow in redux

- a. initial setup -> store created by root reducer (configureStore)
- -> on run : store called root reducer one time and saved returned value as state
- -> because store should have initial value inside it
- when ui is rendered, ui components can access to the current state which saved to the store
- depending on state components decides which thing can be rendered
- also in each state change inside store, components are subscribed for known that state is changes or not
- b. update -> event is acted like user clicked on button
- -> app is dispatched action to store -> store is run reducer with previous state and current action
- -> save this value as new state
- -> store is announced to all ui components which subscribed for that the state is changed
- -> components are looked for what parts of the state are changed which is used by component
- -> components are rerendered with new state

<img src="./src/assets/ReduxDataFlowDiagram.gif" alt="Alt text">

## redux slice

- a collection of redux logic (reducer and actions) which is defined in single file
- slice -> make partitions of root state

## rules

- store should be provided to the root component only and can not be in components
- for states which have used only in one component we not need to define them in store

## react redux

- useSelector hook -> get state from store
- useDispatch hook -> dispatch action for change state