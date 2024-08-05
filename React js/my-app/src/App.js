/*

function 

import Footer from "./class/Footer copy"
let App =()=> {
  return <div>
    <h1>componets</h1>
    <Header/>
    <Slider/>
    <Footer/>
    <Mass/>
  </div>
}

export default App


//class
import React from "react";
import Mask from './fuction com/mass/Mask'
class App extends React.Component{
  render(){
    return <>
    <h1>
      hii
    </h1>
    <p>class componets</p>
    <Mask/>
    </>
  }
}
export default App*/
import React from "react";
import Footer from "./class/Header";
import Header from "./class/Slider";
import Slider from "./class/Footer";
class App extends React.Component{
  render(){
    return <>
    <Header/><hr/>
    <Slider/><hr />
    <Footer/><hr />
    </>
  }
}
export default App