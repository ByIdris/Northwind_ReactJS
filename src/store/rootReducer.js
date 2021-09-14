// Bütün Stateleri tuttuğumuz yer olacak

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer
})