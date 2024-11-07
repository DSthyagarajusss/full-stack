import React from 'react'
import { incrAction,decrAction } from './Componenets/counter.action'
import { useDispatch, useSelector } from 'react-redux'
function Counter() {
    let dipatch=useDispatch()
    let counter=useSelector((state)=>{
        return state.counter
    })
    let inHandler =()=>{
        dipatch(incrAction())
    }
    let deHandler=()=>{
            dipatch(decrAction())
    }
  return<>
    <div className="container mt-5">
   
    <div className="row">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h5>Counter::{counter.counter}</h5>
                </div>
                <div className="card-body">
                    <button className='btn btn-danger ml-4 mr-2' onClick={deHandler}  > Decr</button>{1}
                    <button className='btn btn-primary ml-2' onClick={inHandler} > incr</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Counter