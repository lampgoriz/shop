import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface authData {
    username: string
    password: string

}

interface authDataResponse extends authData {
    token: string
}

export const AuthAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (build) => ({
        getAuth: build.mutation<authDataResponse, authData>({
            query: (authData) => ({
                url: `auth/login`,
                method: 'POST',
                body: authData
            })
        }),
    })
})