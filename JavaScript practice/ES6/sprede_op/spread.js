const bcrypt =require('bcrypt')

let user={
    email:'raju@gmail.com',
    cc:'4455667799978888',
    cvv:889
}

let salt = bcrypt.genSaltSync(10)
let new_cc=bcrypt.hashSync(user.cc,salt)
console.log(new_cc)