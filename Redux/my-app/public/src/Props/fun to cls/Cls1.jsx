import React, { Component } from 'react'

export class Cls1 extends Component {
  render() {
    return <>
    <h3>com---2</h3>
    <pre>{JSON.stringify(this.props)}</pre>
        <p>edetials:::{this.props.employee}</p>
    </>
  }
}

export default Cls1