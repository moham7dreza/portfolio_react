import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blog.slice.js";
import usersReducer from "../features/users/user.slice.js";
import {apiSlice} from "../api/api.slice.js";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: usersReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    // add apiSlice middleware to default middlewares list
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

// store.dispatch(fetchUsers())
store.dispatch(apiSlice.endpoints.getUsers.initiate())