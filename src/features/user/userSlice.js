import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 'ali',
    },
    reducers: {
        create: state => {
            return state.value += '-create'
        }, // directly change state -> used immer js
        update: state => {
            return state.value += '-update'
        },
        updateAttribute: (state, action) => {
            return state.value += action.payload
        }
    }
})

export default userSlice.reducer

export const {
    create,
    update,
    updateAttribute,
} = userSlice.actions