import {combineReducers} from "redux"
import {userReducer} from "./SignIn/reducer";
import cardReducer from "./Cart/reducer";

export default combineReducers({
    userReducer: userReducer,
    cardReducer: cardReducer,
})