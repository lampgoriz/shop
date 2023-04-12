import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProfile} from "../models/IProfile";
import {ICart} from "../models/ICart";

interface ProfileState {
    authToken: string | null,
    autId: number | null
    profile: IProfile
    cart: ICart
}

const initialState = {
    authToken: null,
    autId: null,
    profile: {},
    cart: {},
} as ProfileState

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthToken(state, action: PayloadAction<string>) {
            state.authToken = action.payload
            setAuthTokenToStorage(action.payload)
        },
        setAuthId(state, action: PayloadAction<number>) {
            state.autId = action.payload
            setAuthIdToStorage(String(action.payload))
        },
        initialize(state) {
           state.authToken = getAuthTokenFromStorage()
           state.autId = getAuthIdFromStorage()
        }
    }
})

function setAuthTokenToStorage(authToken: string) {
    localStorage.setItem('shopAuthToken', authToken)
}
function getAuthTokenFromStorage() {
    return localStorage.getItem('shopAuthToken')
}

function setAuthIdToStorage(authId: string) {
    localStorage.setItem('shopAuthId', authId)
}
export function getAuthIdFromStorage() {
    return Number(localStorage.getItem('shopAuthId'))
}


export const {setAuthToken, initialize, setAuthId} = profileSlice.actions

export default profileSlice.reducer