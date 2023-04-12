import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productsReducer from '../store/productsSlice';
import profileReducer from '../store/profileSlice';
import {ProductsAPI} from "../sevices/ProductsService";
import {ProfileAPI} from "../sevices/ProfileService";
import {AuthAPI} from "../sevices/AuthService";

const rootReducer = combineReducers({
    productsReducer,
    profileReducer,
    [ProductsAPI.reducerPath]: ProductsAPI.reducer,
    [ProfileAPI.reducerPath]: ProfileAPI.reducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductsAPI.middleware).concat(ProfileAPI.middleware).concat(AuthAPI.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']