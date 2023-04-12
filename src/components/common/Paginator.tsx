import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import style from './Paginator.module.css'

interface PaginatorProps {
    itemsNumber?: number,
    pageSize: number,
}

export const Paginator: FC<PaginatorProps> = ({itemsNumber = 0, pageSize = 5}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const count = Math.ceil(itemsNumber / pageSize);
    let pages = [];

    for (let i = 0; i < count; i++) {
        const isActive = Number(searchParams.get('page'));
        pages.push(<p className={`${style.page__link} ${isActive === i + 1 ? `${style.active}` : ''}`} key={i + 1}
                      onClick={() => setSearchParams(`page=${i + 1}`)}> {i + 1}</p>)
    }
    return <div>{pages}</div>
}