import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api", // default is api and cache store path like state.api
    // fetchBaseQuery is a wrapper around fetch and receives unique url
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: [
        "blog",
        "user",
    ],
    endpoints: builder => ({
        getBlogs: builder.query({
            query: () => "/blogs",
            // providesTags: ["blog"], // invalid cache for refetch blogs -> for query
            providesTags: (result = [], error, arg) => [
                'blog',
                ...result.map(({id}) => ({
                    type: "blog",
                    id
                }))
            ]
        }),
        getBlog: builder.query({
            query: (blogId) => `/blogs/${blogId}`,
            providesTags: (result, error, arg) => [
                {
                    type: 'blog',
                    id: arg, // arg is blogId
                }
            ]
        }),
        addNewBlog: builder.mutation({
            query: blog => ({
                url: '/blogs',
                method: 'POST',
                body: blog
            }),
            invalidatesTags: ["blog"] // for mutation
        }),
        editBlog: builder.mutation({
            query: blog => ({
                url: `/blogs/${blog.id}`,
                method: 'PUT',
                body: blog
            }),
            invalidatesTags: (result, error, arg) => [
                {
                    type: 'blog',
                    id: arg.id, // arg is blog
                }
            ]
        }),
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddNewBlogMutation,
    useEditBlogMutation,
} = apiSlice