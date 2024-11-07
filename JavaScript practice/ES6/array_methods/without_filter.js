let num=[0,1,2,3,4,5,6,7,8,9,98,7,6,554,43,35,6,21]

let evn_num=[]
let odd_num=[]
for (number in num ){
    if(number%2 ==0){
        evn_num.push(number)
    }
    else{
        odd_num.push(number)
    }
}
console.log('even_numbers:',evn_num)
console.log('odd_numbers:',odd_num)