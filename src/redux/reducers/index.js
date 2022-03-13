import {combineReducers} from "redux";
import books from "./books";
import filters from "./filters";
import cart from "./cart"

const rootReducer = combineReducers({
    books,
    filters,
    cart
})

export default rootReducer