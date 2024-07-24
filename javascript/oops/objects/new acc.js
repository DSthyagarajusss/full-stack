class Account{
    min_Bal=500;
    acc_Bal=0;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount
    }
    get_bal(){

        //with out returun
       // console.log(this.acc_Bal-this.min_Bal)
//with returun
       return  this.acc_Bal-this.min_Bal

    }
    withdrawl(cash){
       return this.acc_Bal=this.acc_Bal-cash
    }
}
let a1=new Account();
console.log(a1)
a1.deposit_Amount(500)

a1.deposit_Amount(15)
console.log(a1)
let a2=new Account();
a2.deposit_Amount(200)
console.log(a2)


 
a1.withdrawl(200)
console.log(a1)
a2.withdrawl(122)
console.log(a2)

let bal1=a1.get_bal()
console.log(bal1)
let bal2=a2.get_bal()
console.log(bal2)