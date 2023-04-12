import {FC} from "react";
import {IProduct} from "../../../models/IProduct";
import style from './ProductsListItem.module.css';
import {truncate} from "../../tools/truncate";
import {Link} from "react-router-dom";

interface  ProductsListItemProps {
    products: IProduct
}



export const ProductsListItem: FC<ProductsListItemProps> = ({products}) => {


    return (
        <div className={style.product__item}>
            <Link to={`/product/${products.id}`}>
                <img className={style.products__image} src={products.image} alt=""/>
                <p className={style.product__title}>{truncate(products.title)}</p>
            </Link>
            <p>rate: {products.rating.rate}, reviews: {products.rating.count}</p>
            <p className={style.product__price}>Price: {products.price}$</p>
            <button>buy</button>
        </div>
    )
}