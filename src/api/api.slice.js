import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api", // default is api and cache store path like state.api
    // fetchBaseQuery is a wrapper around fetch and receives unique url
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    endpoints: builder => ({
        getBlogs: builder.query({
            query: () => "/blogs"
        }),
        getBlog: builder.query({
            query: (blogId) => `/blogs/${blogId}`
        })
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery,
} = apiSlice