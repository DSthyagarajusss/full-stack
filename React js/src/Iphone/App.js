import React from 'react'
import Iphone from './Iphone'
import { Provider } from 'react-redux'
import { store } from './Iphone_Redux/Store'
function App() {
 return<>
 <Provider store={store}>
 <Iphone/>
 </Provider>
</>
}
export default App