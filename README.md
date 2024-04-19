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
- we can not define any async login in reducer

## react redux

- useSelector hook -> get state from store
- useDispatch hook -> dispatch action for change state

## redux async

- async -> code is run in background and not waiting
- sync -> code may be waiting for response
- according to the rule we can not define async login in reducers
- ex : we need to get much data from slow api how can be done ?
- -> before page rendered we need to save data in store then show them
- how can tell redux wait for get data and save them in store ?
- this can be done only is store.js file
- -> but this is not solution we need to defile them in specific components or dispatch action after specific events
- we can use redux thunk middleware which is type of plugin for redux
- thunk has inner and outer function
- inner function has 2 arguments of dispatch and getState which we have access to them in store
- outer function which create and return thunk function