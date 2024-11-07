import React from 'react'
import { gnAction,gmAction } from '../message.action';
import {useDispatch} from 'react-redux'
function Message() {
    let dispatch = useDispatch();  
    let gmHandler=()=>{
            dispatch(gmAction())
    } 
    let gnHandler=()=>{
        dispatch(gnAction())
    } 
  return<>
  <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h5>Message::{'heloo'}</h5>
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