import { createStore } from "redux";
import { MessageReducer } from "./Message_One/Message.reducer";
import {composeWithDevTools} from '@redux-devtools/extension'
let store = createStore(MessageReducer,composeWithDevTools())

export {store}