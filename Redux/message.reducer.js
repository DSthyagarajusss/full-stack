
import { GM,GN } from "./message.action"
let initialState={
    Message:'heloo'
}
let MessageReducer = (state=initialState,action)=>{
    //update store/state based on action type

    switch(action.type){
        case GM:
            return{Message:'good morinig'}
        case GN:
            return{Message:'good nigth'}
        default:
            return state
    }
}

export{MessageReducer}