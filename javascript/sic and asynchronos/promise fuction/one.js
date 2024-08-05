let  GoToGoa=(success,failure)=>{
let acc_bal=4000
if(acc_bal>15000){
  success('go goa and enjoy')
}else{
    failure('go home and sleep')
}
}

GoToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})