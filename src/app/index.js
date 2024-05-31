import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blog.slice.js";
import usersReducer from "../features/users/user.slice.js";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        users: usersReducer,
    }
})