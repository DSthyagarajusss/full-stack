// mareging Object

let emp={
    id:101,
    name:'raju',
    sal:77272,
    loaction:'bengalure',
    working_as:'chai point pvt limited',
    email:'raju@ibm.com'
}
let details={
        loaction:'bengalure1',
        email:'raju@gmail.com'
}

let emp_details={...emp,...details}

console.log(emp_details)