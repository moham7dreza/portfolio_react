import {createSlice} from "@reduxjs/toolkit";

// task of reducer is to update state.counter slice
// because of the given name to createSlice is counter so state.counter is saved to the store,
// so it has name of slice reducer
export const counterSlice = createSlice({
    // depends on this name, it makes possible actions
    name: 'counter',
    initialState: {
        value: 0,
    },
    // with redux toolkit we can directly change state
    // -> because this package use immer js
    // and immer js is handle it with copy
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})
// store is created by reducer which createSlice has it
export default counterSlice.reducer;

// createSlice is also created action creators
export const {
    increment,
    decrement,
    incrementByAmount,
} = counterSlice.actions;

// increment -> {type: 'counter/increment'}

export const selectCount = state => state.counter.value