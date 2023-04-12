import {createSlice} from "@reduxjs/toolkit";
import {IProduct} from "../models/IProduct";

interface ProductsState {
    products: IProduct[],
}

const initialState: ProductsState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
})

export default productsSlice.reducer