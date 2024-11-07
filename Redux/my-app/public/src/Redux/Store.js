import {createStore} from "redux";
import { MessageReducer } from "./message.reduser";
let store= createStore(MessageReducer); 
export{store}