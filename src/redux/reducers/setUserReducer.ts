import { IUser } from "../../models/user";



export const setUserReducer = (state = { user: new IUser()}, action: {type: string, user: IUser}) => {
    switch(action.type) {
        case "SET_USER":
            //state.user = action.user
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}