import React, {useEffect, useState} from "react";
import {ProductsAPI} from "../../../sevices/ProductsService";
import {ProductsListItem} from "./ProductsListItem";
import style from './ProductsList.module.css';
import {Paginator} from "../../common/Paginator";
import {useSearchParams} from "react-router-dom";
import {IProduct} from "../../../models/IProduct";
import {ProductsSidebar} from "../ProductsSidebar/ProductsSidebar";


export const ProductsList = () => {

    const {data: products} = ProductsAPI.useFetchAllProductsQuery(5);
    const [productList, setProductList] = useState<IProduct[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    let page = Number(searchParams.get('page'))

    function setProductPortion(start: number) {
        if (products) {
            let productsPortion = products.slice((start - 1) * 5, (start - 1) * 5 + 5);
            setProductList(prevProductsList => [
                ...prevProductsList,
                ...productsPortion
            ])
        }
    }

    useEffect(() => {
        setProductPortion(page);
    }, [page])


    return (
        <div className={style.products__container}>
            <ProductsSidebar/>
            <div>
                <div className={style.products_list__container}>
                    {/*{products && products.slice((page - 1) * 5, (page - 1) * 5 + 5).map(p => <ProductsListItem*/}
                    {/*    key={p.id} products={p}/>)}*/}
                    {productList && productList.map(p => <ProductsListItem
                        key={p.id} products={p}/>)}
                </div>
                <button onClick={() => setProductPortion(productList.length)}>Show more</button>
                <Paginator itemsNumber={products && products.length} pageSize={5}/>
            </div>
        </div>
    )
}