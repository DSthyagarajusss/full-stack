import React from 'react'

function Table() {
    state ={
        product_name:'iphone',
        image:'data:image/webp;base64,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',
        price:256111,
        qty:1,
   
    }
  return<>
  <div className="container">
    <div className="row">
        <div className="col">
            <table className='table table-hover'>
                <thead className='bg-dark'>
                    <th>Product Name</th>
                    <th>image</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.product_name}</td>
                        <td><img src={this.state.image} alt="" /></td>
                        <td>{this.state.price}</td>
                        <td>{this.state.qty}</td>
                        <td>{this.state.qty * this.state.price}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </>
}

export default Table