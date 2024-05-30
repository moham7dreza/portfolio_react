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

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {}
})

export default blogsSlice.reducer;