import {createSlice, nanoid} from "@reduxjs/toolkit";

// we create hardcoded data for initial state
// we can not create class instances, not serialized values or functions
// redux state and actions must be `plain js` like objects, arrays, ...
// initial state must be object
const initialState = {
    blogs: [
        {
            id: nanoid(),
            // in redux, we can not create class instant like new Date() but we can convert it to string
            date: new Date().toISOString(),
            title: 'new post 1',
            content: 'this is new post ',
            user_id: "kEVfAUsjWWIXZgbsYpbYP1",
            reactions: {
                thumbUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0,
            }
        },
        {
            id: nanoid(),
            date: new Date().toISOString(),
            title: 'new post 2',
            content: 'this is new post ',
            user_id: "kEVfAUsjWWIXZgbsYpbYP2",
            reactions: {
                thumbUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0,
            }
        }
    ]
}
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
                        user_id: userId
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
        },
        reactionAdded: (state, action) => {
            const {id, reaction} = action.payload;

            const blog = state.blogs.find(blog => blog.id === id);

            if (blog) {
                blog.reactions[reaction]++;
            }
        }
    }
})

// selectors
//                                        slice name
export const selectBlogs = state => state.blogs.blogs;
//                                              key in state

export const selectById = (state, blogId) => state.blogs.blogs.find(blog => blog.id === blogId)

export const {
    blogAdded,
    blogUpdated,
    blogDeleted,
    reactionAdded,
} = blogsSlice.actions;

export default blogsSlice.reducer;