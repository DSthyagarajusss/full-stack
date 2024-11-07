import React, { useState } from 'react'

function UseState() {
    // let massage ='helo'
    let [variable,SetVariable]=useState("hello")
    let gmHandler=()=>{
        SetVariable('good morning brother......')
    }
    let gnHandler=()=>{
        SetVariable('good night brother......')
    }
  return <>
 

  <div className="container mt-5">
    <div className="row">
        <div className="col-md-12">
         <h1>Wish:{variable}</h1>
         <button onClick={gmHandler}>Good morning</button>
         <button onClick={gnHandler}>Good night</button>
        </div>
    </div>
  </div>
  
  </>
}

export default UseState