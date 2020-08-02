import {combineReducers} from "redux"
import {userReducer} from "./SignIn/reducer";

export default combineReducers({
    userReducer: userReducer
})