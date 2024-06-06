import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api", // default is api and cache store path like state.api
    // fetchBaseQuery is a wrapper around fetch and receives unique url
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    endpoints: builder => {
        builder.query({
            query: () => "/blogs"
        })
    }
})

export const {
    useGetBlogsQuery
} = apiSlice