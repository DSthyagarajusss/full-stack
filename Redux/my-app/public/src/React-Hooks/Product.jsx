import React, { useState } from 'react'
import NavBar1 from '../NavBar1'

function Product() {
    let [Product,setProduct]=useState({
        p_name:'galaxy s24 ultara ',
        image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-MIbG9kIIsB1L_4EO13tr7sbrImq7ATBNvY3utvIzB7RQiC-8opOKcTCVSLXY3tbQm2i1diRF7QdtggddJNm2gmuXr0d4ZiOQhFUBqH1_JO09hpha0I0yENhZfswXRrmduP9ViA&usqp=CAc",
        price:399322,
        qty:1
    })
    let inHandler=()=>{
        setProduct({...Product ,qty:Product.qty+1})
    }
    let decHandler=()=>{
        setProduct({...Product, qty: Product.qty-1})
    }
  return <>
<NavBar1/>

<div className="container">
    <div className="row">
        <div >
            <table className='table table-hover'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>P_name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Product.p_name}</td>
                        <td><img src={Product.image} width='150px'/></td>
                        <td>{Product.price}</td>
                        <td><i className='fa fa-minus-circle'onClick={decHandler}></i>{Product.qty} <i className='fa fa-plus-circle' onClick={inHandler}></i></td>
                        <td>{Product.qty* Product.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

</>
}

export default Product