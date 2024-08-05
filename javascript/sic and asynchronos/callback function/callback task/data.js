/*let Emp=[
    {id:101,Name:'raju',salary:221221},
    {id:102,Name:'thyaga',salary:221221}
    ]


    let createEmp=(user,callback)=>{
        setTimeout(() => {
            Emp.push(user)
            callback()
        }, 4000);
    }

    let getEmp=()=>{
     setTimeout(()=>{
                 let rows=''
                 for(user of Emp){
                    let rows=rows+`<tr<
                     <td>${user.id}</td>
                      <td>${user.Name}</td>
                       <td>${user.salary}</td>
                    
                    
                    </tr>`

                 }
      document.getElementById('abc').innerHTML=rows
     },2000)
    
    }
    createEmp( {id:103,Name:'manju',salary:221221},getEmp)
    */
    let employees = [{id:101,name:"Raju",salary:100000},
        {id:102,name:"Ramu",salary:100000}

]
let createEmployee=(emp,callback)=>{
setTimeout(()=>{
employees.push(emp)
callback();
},4000)
}
let getEmployeses = ()=>{
setTimeout(()=>{
let rows = ''
for (emp of employees) {
    rows+=`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
    </tr>`
}
document.getElementById('abc').innerHTML=rows;
},2000)
}
createEmployee({id:103,name:"Laxman",salary:100000},getEmployeses)