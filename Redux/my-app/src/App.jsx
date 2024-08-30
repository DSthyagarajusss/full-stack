import React from 'react'
import Message_One from '../src/src1/comoponets/message/Message_One'
import { Provider } from 'react-redux'
import store from './src1/redux/store'
import Product_One from '../src/src1/comoponets/products/Product_One'
const App = () => {
  return (
    <div>
        <h2>App compnonet</h2>
        <hr />
        <Provider store={store}>
        <Message_One/>
        <hr />
        <Product_One />
        </Provider>
    </div>
  )
}

export default App