import {createStore} from "redux"
import { IphoneReduser } from "./Iphone_One/Iphone.reduser"
import {composeWithDevTools} from "@redux-devtools/extension"
let store = createStore(IphoneReduser,composeWithDevTools())
export {store}