import {createSlice, nanoid} from "@reduxjs/toolkit";

// we create hardcoded data for initial state
// we can not create class instances, not serialized values or functions
// redux state and actions must be `plain js` like objects, arrays, ...
const initialState = [
    {
        id: nanoid(),
        // in redux, we can not create class instant like new Date() but we can convert it to string
        date: new Date().toISOString(),
        title: 'new post 1',
        content: 'this is new post ',
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'new post 2',
        content: 'this is new post ',
    }
]
// according to name and reducers received, action creators will be created
const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {
        blogAdded: (state, action) => {
            // redux toolkit use immer and we can directly change state
            state.push(action.payload)
        }
    }
})

export const {blogAdded} = blogsSlice.actions;

export default blogsSlice.reducer;