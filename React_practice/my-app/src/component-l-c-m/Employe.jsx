import React, { Component } from 'react'
import Employyees from './Employees'
export class Employe extends Component {
  render() {
    return <>
    <pre>{JSON.stringify(Employyees)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className='table table-hover'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>Id</th>
                            <th>first_name</th>
                            <th>email</th>
                            <th>gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employyees.map((Employe)=>{
                                    return <tr key={Employe.id}>
                                        <td>{Employe.id}</td>
                                        <td>{Employe.first_name}</td>
                                        <td>{Employe.email}</td>
                                        <td>{Employe.gender}</td>
                                    </tr>
                                    
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  }
}

export default Employe