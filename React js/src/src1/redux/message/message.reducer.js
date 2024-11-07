import { GM,GE } from "./message.action"

let initialState={
    msg:"Hello"
}

let MessageReducer  = (state=initialState,action)=>{
switch(action.type){
    case GM:
        return  { msg:"Good Monring"}
    case GE:
        return { msg:"Good Evening"}
    default:
        return state
}


}
export  default MessageReducer