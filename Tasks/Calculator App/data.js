let result=document.getElementById('xyz')

let cal=(number)=>{
result.value += number
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert('Enter valid Input')
    }


}
let AC=()=>{
    result.value='' 
}

function del(){
    result.value=result.value .slice(0,-1); 
}