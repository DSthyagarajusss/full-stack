import React from 'react'
import { gnAction,gmAction } from '../message.action';
import {useDispatch, useSelector} from 'react-redux'
function Message() {
    let dispatch = useDispatch(); 
    let Message = useSelector((state)=>{
        return state.Message
    }) 
    let gmHandler=()=>{
            dispatch(gmAction())
    } 
    let gnHandler=()=>{
        dispatch(gnAction())
    } 
  return<>
  <div className="container mt-5">
    <pre>{JSON.stringify(Message)}</pre>
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h5>Message::{Message}</h5>
                </div>
                <div className="card-body">
                    <button className='btn btn-danger ml-4' onClick={gmHandler}> gm</button>
                    <button className='btn btn-primary ml-4'onClick={gnHandler}> gn</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Message