let INCR = "INCR"
let DECR = "DECR"

let inActionP = ()=>{
    return{type:INCR}
}
let deActionP = ()=>{
    return{type:DECR}
}
export {inActionP,deActionP,INCR,DECR}