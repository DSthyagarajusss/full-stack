import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReduser";
let store =createStore(rootReducer,composeWithDevTools())

export{store}