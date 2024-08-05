class acount{
   
   // acc_id
    //acc_Name
    //acc_bal
    min_bal =500
    constructor(id,Name,amount){
        this.acc_id=id
        this.acc_Name=Name
        this.acc_bal=amount
    }
    get_bal(){
            return this.acc_bal-this.min_bal
    }
    
    diposit_amount(amount){
      return this.acc_bal+amount
    }

    withdrawl_amount(amount){
        return this.acc_bal =this.acc_bal - amount
    }
}

let a1 =new acount(101,"thyaga",3000)
let a2 =new acount(102,"gopi",2332)
let a3 =new acount(103,"chandu",4533)
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a1.get_bal(29))
console.log(a1.diposit_amount(29))
console.log(a1.withdrawl_amount(30))

