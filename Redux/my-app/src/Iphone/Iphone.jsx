import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inAction, deAction, ADD_PRODUCT } from "./Iphone_Redux/Iphone_One/Iphone.action";
import product from "./assts/products";

function Iphone() {
  const dispatch = useDispatch();
//const Iphone = useSelector((state) => state.cart);
let phone=useSelector((state)=>{
    return state
})
  const inHandler = (item) => {
    console.log(item)
    dispatch(inAction());
  };

  const deHandler = (item) => {
    console.log(item)
    dispatch(deAction());
  };

  useEffect(() => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  }, [dispatch]);

  return (
    <div className="container">
        <pre>{JSON.stringify(phone)}</pre>
      <div className="row">
        <table className="table table-bordered mt-5">
          <thead className="bg-dark text-danger">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.id}> 
                <td>{item.p_Name}</td>
                <td>
                  <img src={item.image} alt='' width={70} />
                </td>
                <td><i className='fa fa-circle-minus ml-3 ' onClick={()=>deHandler(item)}>
                    </i>{phone.qty}
                     <i className='fa fa-circle-plus ml-1' onClick={()=>inHandler(item)}></i></td>
                <td>{item.price * phone.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Iphone;
