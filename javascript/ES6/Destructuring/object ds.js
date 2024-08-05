let user={
    id:9023,
    Name:'raju',
    detailes:{
        phone_num:909909899,
        Email:'ds@gmail.com'
    },
    loc:'thotakanuma'
}

//distructuring a user in id

let {detailes}=user
let {phone_num}=detailes
console.log(phone_num)