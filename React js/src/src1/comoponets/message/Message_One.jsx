import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { geaction,gmaction } from '../../redux/message/message.action'

let Message_One=()=> {
let dispatch=useDispatch()
let message = useSelector((state)=>{
  return state.message
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
  <h2>Value:{message.msg}</h2>
  <button onClick={gmhandler}>good moring </button>
  <button onClick={gehandler}>good evening</button>
</>
}
export default Message_One