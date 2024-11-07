import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar1 from './src/React-Hooks/ContactApp/Navbar1.jsx'
import ContactApp from './src/React-Hooks/ContactApp/ContactApp.jsx'
function App() {
 return<>
 <Router>
    <Navbar1/>
      <Routes>
        <Route path='/ContactApp' element={ContactApp}/>
      </Routes>
 </Router>
 
 </>
}

export default App