import React from 'react'
import { inAction,deAction } from '../Redux_products/products_one/product.action'
import {useDispatch, useSelector} from "react-redux"
function Product() {

    let dispatch = useDispatch()
    let Product = useSelector((state)=>{
        return state
    })

    let inHandler = ()=>{
        dispatch(inAction())
    }

    let deHandler =  ()=>{
        dispatch(deAction())
    }

  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <table className='table table-bordered'>
                    <thead className='bg-success'>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Product.name}</td>
                            <td><img src={Product.image} alt="" width={80}/></td>
                            <td><i className='fa fa-circle-minus' onClick={deHandler}></i>{Product.qty}<i className='fa fa-circle-plus' onClick={inHandler}></i></td>
                            <td>{Product.price*Product.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/* <pre>{JSON.stringify(Product)}</pre>
        <button onClick={deHandler}>-</button>{Product.qty}
        <button onClick={inHandler}>+</button> */}
    </div>
  )
}

export default Product