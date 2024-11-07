import {createStore} from "redux";
import { MessageReducer } from "./message.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
let store= createStore(MessageReducer ,composeWithDevTools()) ; 


export{store}