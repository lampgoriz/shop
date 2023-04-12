import React, {useEffect} from "react";
import {ProfileAPI} from "../../sevices/ProfileService";
import {ProfileItem} from "./ProfileItem";
import {getAuthIdFromStorage, setAuthId} from "../../store/profileSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Auth} from "../Auth/Auth";
import {redirect, useLocation, useNavigate} from "react-router";
import {IProfile} from "../../models/IProfile";


function findUser(users: IProfile[], username: string) {
    const currentUser = users.filter(user => user.username === username)
    return currentUser[0].id
}


export const Profile = () => {

    const authId = useAppSelector(state => state.profileReducer.autId)
    // console.log(authId)
    const navigate = useNavigate();
    if (authId === 0) {
        navigate("/auth");
    }


    const {`username`, users}: { username?: string, users?: IProfile[] } = useLocation().state
    let authorizedUserId: any = getAuthIdFromStorage()
    const dispatch = useAppDispatch()


    // start after auth
    if (users && username) {
        authorizedUserId = findUser(users, username)
        dispatch(setAuthId(authorizedUserId))
    }

    const {data: profile} = ProfileAPI.useFetchUserQuery(authorizedUserId)

    if (profile) {
        return <ProfileItem profile={profile}/>
    }
    return <Auth/>
}