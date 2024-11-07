import { combineReducers } from "redux";
import { MessageReducer } from "../Redux/message.reducer";
import { counterReducer } from "./Componenets/counter.reducer";
let rootReducer=combineReducers({
    message:MessageReducer,
    counter:counterReducer
});

export {rootReducer}
