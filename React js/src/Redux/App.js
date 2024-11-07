import React from 'react'
import Message from './message/Message'
import { store } from './Redux/Store'
import {Provider} from 'react-redux'

function App() {
  return <div>
    <h1>Test</h1>
  <Provider store={store}>
      <h1>App Component</h1>
      <hr/>
      <Message/>

  </Provider>
</div>
}


export default App