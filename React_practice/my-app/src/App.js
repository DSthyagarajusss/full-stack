import React from 'react'
import Navbar from './Router-react/Navbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login_Component from './From_handling/Login_Component.jsx'
import Singup from './From_handling/Singup.jsx'
import Frist from './From_handling/Frist.jsx'
  
export default function App() {
  return <>
 <Router>
    <Navbar/>
    <Switch>
      <Route path="/home"  Component={Frist}/>
      <Route path="/login"  Component={Login_Component}/>
      <Route path="/singup"  Component={Singup}/>
    </Switch>
  </Router>
    
  
  
  </>
}
