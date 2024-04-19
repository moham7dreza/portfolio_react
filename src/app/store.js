import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    // assign name to reducer
    reducer: {
        counter: counterReducer,
    }
})

// example for redux thunk only in this file
// const fetchUserById = userId => {
//     return async (dispatch, getState) => {
//         try {
//             const user = await userApi.fetchById(userId)
//             dispatch(userLoaded(user))
//         } catch (err) {
//
//         }
//     }
// }