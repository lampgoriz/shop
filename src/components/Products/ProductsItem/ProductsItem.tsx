import style from './ProductsItem.module.css';
import {useNavigate, useParams} from "react-router";
import {ProductsAPI} from "../../../sevices/ProductsService";
import {Error} from "../../common/Error";


export const ProductsItem = () => {

    const {id} = useParams();
    const {data: productItem} = ProductsAPI.useFetchProductQuery(Number(id));
    const navigate = useNavigate();
    const goBack = () => navigate(-1);


    if(productItem){
        return (
            <div className={`${style.product__item_wrapper} container`}>
                <button className={style.back__btn} onClick={goBack}>Back to the list</button>
                <p className={style.product__title}>{productItem.title}</p>
                <div className={style.product__item_body}>
                    <div><img className={style.products__image} src={productItem.image} alt=""/></div>
                    <div className={style.product__item_content}>
                        <p>rate: {productItem.rating.rate}, reviews: {productItem.rating.count}</p>
                        <p className={style.product__price}>Price: {productItem.price}$</p>
                        <button>buy</button>
                        <p>{productItem.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    return <Error />
}