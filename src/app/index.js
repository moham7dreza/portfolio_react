import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blog.slice.js";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer
    }
})