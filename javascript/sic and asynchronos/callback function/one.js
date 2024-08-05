

let createEmployee =(  Callback)=> {
    setTimeout(() => {
        console.log('good byee')
        Callback()
    }, 4000);
}

let getEmployee=()=>{
    setTimeout(() => {
        console.log('hii--!')
    }, 2000);
}

createEmployee(getEmployee)
