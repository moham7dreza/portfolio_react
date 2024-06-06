import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api", // default is api and cache store path like state.api
    // fetchBaseQuery is a wrapper around fetch and receives unique url
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: [
        "blog"
    ],
    endpoints: builder => ({
        getBlogs: builder.query({
            query: () => "/blogs",
            providesTags: ["blog"], // invalid cache for refetch blogs -> for query
        }),
        getBlog: builder.query({
            query: (blogId) => `/blogs/${blogId}`
        }),
        addNewBlog: builder.mutation({
            query: blog => ({
                url: '/blogs',
                method: 'POST',
                body: blog
            }),
            invalidatesTags: ["blog"] // for mutation
        })
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddNewBlogMutation
} = apiSlice