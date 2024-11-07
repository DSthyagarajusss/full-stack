import React from 'react'
import Cls1 from './Cls1'
function Func1() {
    let emp={
        eid:101,
        name:'raju',
        email:'ds@gamil.com',
        esal:749939
    }
 return <>
 <h2>comp----1</h2>
 <Cls1 employee={emp.eid}/>
 </>
}

export default Func1