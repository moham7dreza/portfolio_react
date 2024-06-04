import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import * as UserService from "../../services/UserService.js";

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
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;//immer js will replace this with current state value
        })
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

export const createUser = createAsyncThunk(
    "users/createUser",
    async (user) => {
        const response = await UserService.store(user);
        return response.data;
    }
)

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (user) => {
        const response = await UserService.update(user, user.id);
        return response.data;
    }
)

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id) => {
        await UserService.destroy(id);
        return id;
    }
)
