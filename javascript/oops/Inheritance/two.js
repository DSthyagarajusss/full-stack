class parent{
   constructor(){
    console.log('parent class constracter')
   }
}
class child extends parent{
    constructor(){
        super();// inwoking parent class member
             console.log('parent class constracter')
       }
}
new child()