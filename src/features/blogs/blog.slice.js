import {createAsyncThunk, createSlice, current, nanoid} from "@reduxjs/toolkit";
import * as BlogService from "../../services/BlogService.js";

// we create hardcoded data for initial state
// we can not create class instances, not serialized values or functions
// redux state and actions must be `plain js` like objects, arrays, ...
// initial state must be object
const initialState = {
    blogs: [],
    status: "idle",
    error: null,
}

export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBlogs",
    async () => {
        const response = await BlogService.index()
        return response.data
    }
)

export const addNewBlog = createAsyncThunk(
    "blogs/addNewBlog",
    async (blog) => {
        const response = await BlogService.store(blog)
        return response.data
    }
)

export const deleteBlog = createAsyncThunk(
    "blogs/deleteBlog",
    async (id) => {
        await BlogService.destroy(id) // wait for promise resolved then go
        return id // we return id which will access in extra reducer
    }
)

// according to name and reducers received, action creators will be created
const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {
        // redux toolkit use immer and we can directly change state
        blogAdded: {
            reducer(state, action) {
                state.blogs.push(action.payload)
            },
            // this we be replaced in action payload
            // before send payload to reducer, payload will prepare
            prepare(title, content, userId) {
                // we can implement complex logic here
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title: title,
                        content: content,
                        user_id: userId,
                        reactions: {
                            thumbUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0
                        }
                    }
                }
            }
        },
        blogUpdated: (state, action) => {
            const {id, title, content, userId} = action.payload;

            const blog = state.blogs.find(blog => blog.id === id);

            if (blog) {
                blog.title = title;
                blog.content = content;
                blog.user_id = userId;
            }
        },
        blogDeleted: (state, action) => {
            const {id, title, content} = action.payload;
            // return all post except deleted post,
            // but we can use filter method on initial state `object` -> on blogs key we can
            state.blogs = state.blogs.filter(blog => blog.id !== id);
            // console.log(state.blogs); // proxy object : create an object from original object and if we change it, not affected on original
            // this is because of immer and the state give to us, is not original state, but it is draft
            // we can change state directly and immer js will replace it in background which will be pure
            console.log(current(state)) // but we can use current to get state in reducer when we need to debug
        },
        reactionAdded: (state, action) => {
            const {id, reaction} = action.payload;

            const blog = state.blogs.find(blog => blog.id === id);

            if (blog) {
                blog.reactions[reaction]++;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchBlogs.fulfilled, (state, action) => {
            state.status = 'completed'
            state.blogs = action.payload
        }).addCase(fetchBlogs.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }).addCase(addNewBlog.fulfilled, (state, action) => {
            state.blogs.push(action.payload)
        }).addCase(deleteBlog.fulfilled, (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        })
    }
})

// selectors
//                                        slice name
export const selectBlogs = state => state.blogs.blogs;
export const selectStatus = state => state.blogs.status;
export const selectError = state => state.blogs.error;
//                                              key in state

export const selectById = (state, blogId) => state.blogs.blogs.find(blog => blog.id === blogId)

export const {
    blogAdded,
    blogUpdated,
    blogDeleted,
    reactionAdded,
} = blogsSlice.actions;

export default blogsSlice.reducer;