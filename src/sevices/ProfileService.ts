import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProfile} from "../models/IProfile";


export const ProfileAPI = createApi({
    reducerPath: 'profileAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (build) => ({
        fetchUser: build.query<IProfile, number>({
            query: (id: number) => ({
                url: `users/${id}`
            })
        }),
        fetchAllUsers: build.query<IProfile[], any>({
            query: () => ({
                url: `users`
            })
        })
    })
})