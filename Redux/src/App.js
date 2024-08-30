import React from 'react'
import Iphone from './Iphone/Iphone'
import { Provider } from 'react-redux'
import { store } from './Iphone/Iphone_Redux/Store'
function App() {
 return<>
 <Provider store={store}>
 <Iphone/>
 </Provider>
</>
}
export default App