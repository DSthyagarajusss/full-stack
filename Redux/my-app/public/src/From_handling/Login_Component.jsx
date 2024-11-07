import React, { Component } from 'react'

export class Login_Component extends Component {
    state={
        email:'',
        password:''
    }
    emailHandelr =(event)=>{
        // console.log(event.target.value)
        this.setState({email : event.target.value})
    }
    passwordHandelr =(event)=>{
        this.setState({ password:  event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return <>

<form action="" onSubmit={this.submitHandler} className='form-group'>
<pre>{JSON.stringify(this.state) }</pre>
<div className="container mt-5">
  <div className="row">
      <div className="col-md-6">
          <div className="card">
              <div className="card-header bg-primary text-white">
              <h1>Login_Component</h1> 
              </div>
              <div className="card-body">
                  <label htmlFor="">Email ID:</label>
                  <input type="text" onChange={this.emailHandelr}/> <br />
                  <label >Password</label>
                  <input type="password"onChange={this.passwordHandelr} /> <br /> <br />
                  <input type="submit"  className='btn btn-warning' value='login'/>
               </div>
          </div>
      </div>
  </div>
</div>
</form>
    </>
  }
}

export default Login_Component