import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import {apiSlice} from "../../api/api.slice.js";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState()

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {}
})

export default usersSlice.reducer;

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ['user'],
            // store normalized and transformed data into cache directly
            transformResponse: data => {
                return userAdapter.setAll(initialState, data)
            }
        }),
        storeUser: builder.mutation({
            query: user => ({
                url: `/users`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ["user"]
        }),
        deleteUser: builder.mutation({
            query: userId => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["user"]
        })
    })
})

export const {
    useGetUsersQuery,
    useStoreUserMutation,
    useDeleteUserMutation,
} = extendedApiSlice

export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select;

// get from cache
export const selectUsersData = createSelector(
    [selectUsersResult],
    response => response.data
)

export const {
    selectAll: selectUsers,
    selectById
} = userAdapter.getSelectors(state => selectUsersData(state) ?? initialState)