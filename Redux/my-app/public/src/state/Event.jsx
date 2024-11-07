import React, { Component } from 'react'

export class Event extends Component {
    state={
        msg:"helloww"
    }
    EventHandler=(msg)=>{
        this.setState({ msg:msg})
    }
  render() {
  return<>
      <h1>Event component</h1>

    <pre>{JSON.stringify(this.state.msg)}</pre>
    <h3>wish message::{this.state.msg}</h3>
    <button onClick={this.EventHandler.bind(this,'good morinig sirrrr')}>good morning</button>
    <button onClick={this.EventHandler.bind(this,"good affternoon ra machaa")}>good affernoon</button>
    <button onClick={this.EventHandler.bind(this,'good nigth ra machaa')}>good night</button>
  </>
  }
}

export default Event