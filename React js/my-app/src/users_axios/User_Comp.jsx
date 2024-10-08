import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './style.css'
let User_Comp=()=>{
    let [users,setUser]=useState([])
    useEffect(()=>{
          Axios.get('https://jsonplaceholder.typicode.com/users')
               .then((respones)=>{
                //  console.log(respones)
                //  console.log(respones.data)
                 setUser(respones.data)
             })
              .catch()
    },[])
return  <>
<h2>user_comp</h2>
<pre>{JSON.stringify(users)}</pre>
{/* <button onClick={getUsers}>get users</button> */}

{
    users.length > 0 ? <>
    <table border={2}>
        <thead><tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            </tr>
        </thead>
        <tbody>
{
    users.map((user)=>{
            return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
    })
}
</tbody>
    </table>
    
    </>:<>no data</>
}

</>
}

export default User_Comp