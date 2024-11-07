let num=[0,1,2,3,4,5,6,7,8,9,98,7,6,554,43,35,6,21]

evn_num=num.filter((num)=>{
  return num%2 ===0
})
console.log(evn_num)