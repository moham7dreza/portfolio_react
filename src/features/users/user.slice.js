import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        name: "user name 1",
    },
    {
        id: "2",
        name: "user name 2",
    },
    {
        id: "3",
        name: "user name 3",
    },
]

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.push({
                id: nanoid(),
                name: action.payload
            })
        }
    }
})

export const selectUsers = state => state.users;

export const selectById = (state, userId) => state.users.find(user => user.id === userId)

export default usersSlice.reducer;