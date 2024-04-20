import {createSlice, nanoid} from "@reduxjs/toolkit";

// redux state and actions must be js objects strings and so ... and not be class instances or methods
const initialState = [
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'new post 1',
        content: 'this is new post ',
    },
    {
        id: nanoid(),
        date: new Date().toISOString(),
        title: 'new post 2',
        content: 'this is new post 2',
    },
]

const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {}
})

export default blogSlice.reducer;