import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

export const Navbar = () => {

    const setActive = ({isActive}: { isActive: boolean }) => isActive ? style.active__link : '';
    const authId = useAppSelector(state => state.profileReducer.autId)


    return (
        <div className={style.navbar__container}>
            <div className={style.navbar__body}>
                <NavLink className={setActive} to={'products-list?page=1'}>Products</NavLink>
                <NavLink className={setActive} to={'profile'}>Profile</NavLink>
                {!authId ? <NavLink className={setActive} to={'auth'}>Log in</NavLink> : <button>Log out</button>}
            </div>
        </div>
    )
}