import React from 'react'
import Counter from './Redux2/Counter'
import { store } from './Redux2/Store'
import { Provider } from 'react-redux'
import Message from './Redux/Massege/Message'
function App() {
  return <>
  <Provider store={store}>
  <Counter/>
{/* <Message/> */}
  </Provider> 
  </>
}

export default App