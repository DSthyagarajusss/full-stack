
import { INCR,DENCR } from "./counter.action"
let initialstate = {counter :0}
let counterReducer =(state=initialstate,action)=>{
    switch(action.type){
        case INCR:
            return{counter:state.counter+1 ,myname:action.payload } 
        case DENCR:
            return{counter:state.counter-1 ,myFavMovie:action.payload}
        default:
            return state
    }
        
}
export{counterReducer}