// 1. actions -> js object with type filed
// can be seemed as events on changes on some where
import {configureStore} from "@reduxjs/toolkit";

const sample_action = {
    // type : defile what is event do
    // sections : category/action
    type: 'counter/increment',
    // data can be store in payload
    payload: 2,
}

// 2. action creators -> return an action
const increment = number => {
    return {
        type: 'counter/increment',
        payload: number,
    }
}

// 3. reducers -> receive action and state and decides how to change state if necessary and return new state
// can be seemed as event listener which handles events(actions)
// rules
// a. depends on received arguments must calculate new state
// b. reducers can not be changes the state directly inside the reducer -> we should make a copy of state then change the copy
// c. can not act async logic or calculate random values or makes side effects -> do not make app unpredictable
// example
const initialState = {
    value: 1
}
// state should be initialized which reducer returns state
const counterReducer = (state = initialState, action) => {
    // we define conditions for actions which will react to them or not
    switch (action.type) {
        case 'counter/increment':
            const copyState = {...state}
            return {
                // value: copyState.value + action.payload
                value: copyState.value += 1
            }
        // only return current state
        default:
            return state
    }
}

// reducer word takes from array reduce function which reduce array items

const numbers = [1, 2, 4]

const addNumber = (prev, current) => {
    return prev + current
}

const initialValue = 0

const total = numbers.reduce(addNumber, initialValue)


// 4. store -> state of app which lives in store object
// when states changes, it stays in store object
// store creates with reducer and has get function to receive current state value

const store = configureStore({reducer: counterReducer})

store.getState()

// 4.1. dispatch -> only way to update state with dispatch action
// store run reducer gives to him and save new state inside him, so we can get updated state with getState function
// action dispatch is seemed like trigger an event in app
store.dispatch(increment())

// 5. selectors -> can be extract value from state which save inside store object like useSelector hook

const selectCounterValue = state => state.value
const currentValue = selectCounterValue(store.getState())
console.log(currentValue)