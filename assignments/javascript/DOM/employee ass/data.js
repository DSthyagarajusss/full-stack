let employee=[
    {id:101,Name:'Thyaga',sal:23444},
    {id:102,Name:'Dinesh',sal:23444},
    {id:103,Name:'raju',sal:23444},
    {id:104,Name:'gopi',sal:23444}
]


function display_employees(){
    let rows=" "
   for(emp of employee){
    rows =rows + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.Name}</td>
                        <td>${emp.sal}</td>
                  </tr>`      
   }
   // document.getElementById('h').innerHTML=rows
   document.getElementsByTagName("tbody")[0].innerHTML=rows
}