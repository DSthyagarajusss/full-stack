let INCR='INCR'
let DENCR='DENCR'

let incrAction=()=>{
    return{type:INCR , payload:'raju'}
}
//action is fuction it return retunable object

let decrAction=()=>{
    return{type:DENCR , payload:'Devara '}
}

export{incrAction,decrAction,DENCR,INCR}