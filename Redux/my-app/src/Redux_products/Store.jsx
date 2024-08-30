import { createStore } from "redux";
import { ProductReducer } from "./products_one/product.reduser";
import {composeWithDevTools} from "@redux-devtools/extension"
let store = createStore(ProductReducer,composeWithDevTools())
export {store}