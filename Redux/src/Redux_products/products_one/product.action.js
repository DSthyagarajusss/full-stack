let INCR = "INCR"
let DECR = "DECR"

let inAction = ()=>{
    return{type:INCR}
}
let deAction = ()=>{
    return{type:DECR}
}
export {inAction,deAction,INCR,DECR}