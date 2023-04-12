import style from './ProductsSidebar.module.css';
import React from "react";
import {ProductsAPI} from "../../../sevices/ProductsService";


export const ProductsSidebar = () => {

    const {data: categories} = ProductsAPI.useFetchAllCategoriesQuery(1000000);

    return (
        <div className={style.products_sidebar__containers}>
            <p className={style.categories}>categories</p>
            {categories && categories.map(c => <p key={c} className={style.categories__item}>{c}</p>)}
        </div>
    )
}