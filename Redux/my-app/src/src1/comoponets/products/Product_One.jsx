import React from 'react';
import { inActionP, deActionP } from '../../redux/product_two/product.Acation';
import { useDispatch, useSelector } from 'react-redux';

function Product_One() {
    const dispatch = useDispatch();
    const product = useSelector((state) => {
        return state.product
    });

    const inHandler = () => {
        dispatch(inActionP());
    };

    const deHandler = () => {
        dispatch(deActionP());
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <table className='table table-bordered'>
                        <thead className='bg-success'>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Qty</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td><img src={product.image} alt={product.name} width={80} /></td>
                                <td>
                                    <button 
                                        className='btn btn-danger' 
                                        onClick={deHandler}
                                        aria-label="Decrease quantity"
                                    >
                                        <i className='fa fa-circle-minus'></i>
                                    </button>
                                    {product.qty}
                                    <button 
                                        className='btn btn-success' 
                                        onClick={inHandler}
                                        aria-label="Increase quantity"
                                    >
                                        <i className='fa fa-circle-plus'></i>
                                    </button>
                                </td>
                                <td>{product.price * product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Product_One;
    