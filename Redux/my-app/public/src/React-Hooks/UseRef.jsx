import React, { useRef } from 'react'

function UseRef() {
    let buttonref =useRef(null)
    let clickHandler=()=>{
        
    }
  return<>
  <div className="container mt-5    ">
    <div className="row">
        <div className="col-md-5">
        <input type="submit" value='login' ref={buttonref} onClick={clickHandler} />
        </div>
    </div>
  </div>
  
  </>
}

export default UseRef