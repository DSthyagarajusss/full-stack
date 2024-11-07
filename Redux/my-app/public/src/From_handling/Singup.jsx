import React, { Component } from 'react'

export class Singup extends Component {
    state={
            Name:'',
            email:'',
            password:'',
            address:''

    }
    updateHandler=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
       
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return <>
<form action="" className='from-group' onSubmit={this.submitHandler}>
<div className="container form-group">
        <div className="row form-group">
            <div className="col-md-6 form-group">
               
                
                    <h3>Singup</h3>
                    <pre>{JSON.stringify(this.state)}</pre>
                        <label htmlFor="">Name:</label> <br />
                        <input type="text" placeholder='enter your name' name='Name' onChange={this.updateHandler}/> <br />
                        <label htmlFor="">email:</label><br />
                        <input type="email" placeholder='enter your email' name='email'onChange={this.updateHandler} /><br />
                        <label htmlFor="">password</label><br />
                        <input type="password" placeholder='enter your paasword' name='password' onChange={this.updateHandler} /><br />
                        <label htmlFor="">Address</label><br />
                        <input type="text" placeholder=' enter our Address' name='address' onChange={this.updateHandler}/><br /><br />
                        <input type="submit" value='Singup' className='btn btn-warning' />

              
               
            </div>
        </div>
    </div>
</form>
    

    </>
  }
}

export default Singup