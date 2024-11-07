import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {gmaction,geaction} from '../Redux/Message_One/Message.action'


let Message=()=> {
let dispatch=useDispatch()
let message = useSelector((state)=>{
  return state
})

let gmhandler=()=>{
  dispatch(gmaction())
}
let gehandler=()=>{
  dispatch(geaction())
}
  return <>
  <pre>{JSON.stringify(message)}</pre>
  <h2>Message component</h2>
  <button onClick={gmhandler}>good moring </button>
  <button onClick={gehandler}>good evening</button>
</>
}
export default Message