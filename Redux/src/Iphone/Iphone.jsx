import React from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { inAction,deAction } from './Iphone_Redux/Iphone_One/Iphone.action'
function Iphone() {
    let dispath=useDispatch()
    let iphone=useSelector((state)=>{
        return state
    })
    let inHandler=()=>{
        dispath(inAction())
    }
   let deHandler=()=>{
    dispath(deAction())
   }
 return<>
     <div className="container">
        <div className="row">
            <table className='table table-bordered mt-5 '>
                <thead className='bg-dark text-danger'>
                    <th>Name</th>
                    <th>image</th>
                    <th>qty</th>
                    <th>price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{iphone.p_Name}</td>
                        <td> <img src={iphone.image} alt="" width={70} /> </td>
                        <td><i className='fa fa-circle-minus' onClick={deHandler}></i>{iphone.qty}<i className='fa fa-circle-plus' onClick={inHandler}></i></td>
                        <td>{iphone.price*iphone.qty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     </div>

        {/* <pre>{JSON.stringify(iphone)}</pre>
        <button onClick={deHandler}>-</button>{iphone.qty}
        <button onClick={inHandler}>+</button> */}
 </>
}

export default Iphone