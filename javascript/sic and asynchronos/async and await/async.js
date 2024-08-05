let employees = [{id:101,name:"Raju",salary:100000},
    {id:102,name:"Ramu",salary:100000}

]
let createEmployee=(emp)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let db_flag = true

        employees.push(emp)

      db_flag ===true ? resolve('inserted valuse'):reject(failed)    
    },4000)
})
}
let getEmployeses = ()=>{
setTimeout(()=>{
let rows = ''
for (emp of employees) {
   rows=rows + `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.salary}</td>
</tr>`
}
document.getElementById('abc').innerHTML=rows;
},2000)
}

let exec= async()=>{
await createEmployee({id:103,name:"Laxman",salary:100000})
getEmployeses()

}
exec()
/*.then((mas)=>{
    console.log(mas)
    getEmployeses()
})
.catch((err)=>{console.log(err)})
*/
