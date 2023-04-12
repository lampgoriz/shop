import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../models/IProduct";


export const ProductsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], number>({
            query: (limit: number = 5) => ({
                url: 'products',
                // params: {
                //     limit: limit
                // }
            })
        }),
        fetchProduct: build.query<IProduct, number>({
            query: (id: number) => ({
                url: `products/${id}`
            })
        }),
        fetchAllCategories: build.query<string[], number>({
            query: (limit: number = 5) => ({
                url: 'products/categories',
                params: {
                    limit: limit
                }
            })
        })
    })
})