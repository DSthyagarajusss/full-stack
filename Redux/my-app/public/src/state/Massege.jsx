import React from "react";
class Massege extends React.Component {
    massege='hii welcome'
    gmHandler=()=>{
        this.massege='good moring ra machaaaaaa'
        this.forceUpdate()
    }
render (){
    return<>
    <h1>Massege Component</h1>
    <h2>massege::::{this.massege}</h2>
    <button onClick={this.gmHandler}>GM</button><br /> <br />
    <button onClick={this.gmHandler.bind('good night')}>GN</button>
    </>
}
}
export default Massege