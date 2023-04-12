import React, {FC} from "react";
import {IProfile} from "../../models/IProfile";
import style from './Profile.module.css'

interface ProductsListItemProps {
    profile: IProfile
}

export const ProfileItem: FC<ProductsListItemProps> = ({profile}) => {

    return (
        <div className={`${style.profile__data} container`}>
            <p>email: <span>{profile.email}</span></p>
            <p>username: <span>{profile.username}</span></p>
            <p>password: <span>{profile.password}</span></p>
            <p>phone: <span>{profile.phone}</span></p>
            <p>city: <span>{profile.address.city}</span></p>
            <p>street: <span>{profile.address.street}</span></p>
        </div>
    )
}