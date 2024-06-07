import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {apiSlice} from "../../api/api.slice.js";

// adapter give many reducer functions to work with normalized state
const blogAdapter = createEntityAdapter({
    // selectId: "blogId", if key of id is different
    // sort ids array by blogs dates
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = blogAdapter.getInitialState({
    status: "idle",
    error: null,
})

// according to name and reducers received, action creators will be created
const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
})

// export const {
//     selectAll: selectBlogs,
//     selectById,
//     selectIds,
// } = blogAdapter.getSelectors(state => state.blogs)

// export const selectAuthorBlogs = createSelector(
//     [selectBlogs, (state, userId) => userId],
//     (blogs, userId) => blogs.filter(blog => blog.user_id === userId)
// )
//                                              key in state

// export const selectById = (state, blogId) => state.blogs.blogs.find(blog => blog.id === blogId)

export const {
    // blogAdded,
    // blogUpdated,
    // blogDeleted,
    reactionAdded,
} = blogsSlice.actions;

export default blogsSlice.reducer;

export const selectBlogsResult = apiSlice.endpoints.getBlogs.select

export const selectAuthorBlogs = createSelector(
    [selectBlogsResult, (state, userId) => userId],
    (blogs, userId) => blogs.filter(blog => blog.user_id === userId)
)