
import axios from 'axios';
import React, { Component } from 'react'

export class Employee extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         users:[

    //         ]
    //     }

    // }
    state={
        users:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            this.setState({users:response.data})
            //console.log(response.data)
        })
        .catch((err)=>{ 
            console.error(err)
        })
    }
    render() {
    
    return <>
    <pre>{JSON.stringify(this.state.users)}</pre>
    <div className="container">
        <div className="row">
           
                {
                     this.state.users.length > 0 ? <>
                     <div className="col-md-8">
                        <table className='table table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>city</td>
                                    <td>email</td>
                                    <td>Username</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user)=>{
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                     </div>
                     </>: null
                }
           
        </div>
    </div>
    </>
  }
}

export default Employee