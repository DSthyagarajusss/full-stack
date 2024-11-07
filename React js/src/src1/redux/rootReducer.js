import {combineReducers} from 'redux'
import { ProductReducer } from './product_two/product.Rducer'
import MessageReducer from "./message/message.reducer"
let rootReducer= combineReducers({message:MessageReducer ,product:ProductReducer})

export default rootReducer
