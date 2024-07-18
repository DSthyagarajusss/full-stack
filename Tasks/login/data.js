let th=()=>{
let email =document.getElementsByTagName('input')[0].value
let password =document.getElementsByTagName('input')[1].value
//alert(email,password   )

if(email ==''||  email==null){
 document.getElementsByTagName('span')[0].innerHTML='Enter your email id'
}
if(password=='' || password==null){
    document.getElementsByTagName('span')[1].innerHTML='Enter your password'
}

else if (password.length<5) {
    document.getElementById('hh').innerHTML='Enter your min 5 charecters'
}
return false
}
