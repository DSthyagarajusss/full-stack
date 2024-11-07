import React from 'react'
import Message from './Redux/Massege/Message'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
function App() {
  return <>
  <Provider store={ store}>
    <Message/>
</Provider>
  </>
}

export default App