import {IUser} from "../../models/user"

export const setUser = (user:IUser) => ({
    type: 'SET_USER',
    user
})