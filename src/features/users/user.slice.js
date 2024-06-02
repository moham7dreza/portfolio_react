import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import * as UserService from "../../services/BlogService.js";

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
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

export const fetchUsers = createAsyncThunk(
    '/users/fetchUsers',
    async () => {
        const response = await UserService.index();
        return response.data;
    }
)