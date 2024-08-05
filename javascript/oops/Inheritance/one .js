class parent{
    m1(){
        console.log('parent class m1')
    }
    m2(){
        console.log('parent class m2')
    }
}
class child extends parent{
 m3(){
  console.log('child class -m3')
 }
}
let c1=new child()
console.log(c1)
c1.m1()
c1.m2()
c1.m3()
