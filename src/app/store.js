import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    // assign name to reducer
    reducer: {
        counter: counterReducer,
    }
})