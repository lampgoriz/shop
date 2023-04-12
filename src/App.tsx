import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layuot/Layout";
import {Auth} from "./components/Auth/Auth";
import {useAppDispatch} from "./hooks/redux";
import {initialize} from "./store/profileSlice";
import {Profile} from "./components/Profile/Profile";
import {ProductsItem} from "./components/Products/ProductsItem/ProductsItem";
import {ProductsList} from "./components/Products/ProducstList/ProductsList";

function App() {

    const dispatch = useAppDispatch();
    dispatch(initialize());

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'products-list/'} element={<ProductsList/>}/>
                <Route path={'products-list'} element={<Navigate to='/products-list/1' replace/>}/>
                <Route path={'product/:id'} element={<ProductsItem/>}/>
                <Route path={'profile'} element={<Profile />}/>
                <Route path={'auth'} element={<Auth />}/>
            </Route>
        </Routes>
    );
}

export default App;
