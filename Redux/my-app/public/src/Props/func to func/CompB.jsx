import React from 'react'

function CompB(props) {
   
 return<>
 <h1>componet ---B</h1>
 <pre>{JSON.stringify(props)}</pre>
 <p>employee::{props.name}</p>
 </>
}

export default CompB