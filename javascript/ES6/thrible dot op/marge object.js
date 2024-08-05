let emp={id:101,
    name:'raju',
    emali:'r@gamil.com'
}

let emp1={
    name:'raju 1',
    emali:'r@gamil.com',
    salary:32327
}

let emp_details={ ...emp, ...emp1}

console.log(emp_details)    