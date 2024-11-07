import React from "react";
class ClassComponent extends React.Component{
state={
    qty:1
}
incrhandler=()=>{
    this.setState({qty:this.state.qty+1})
}
dechandler=()=>{
    this.setState({qty:this.state.qty-1})
}
render(){
    return<>
    <button onClick={this.dechandler} >-</button>{this.state.qty}
    <button className="" onClick={this.incrhandler}>+</button>
    </>
}
}
export default ClassComponent 