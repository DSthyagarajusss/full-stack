let cars=[
    {brand:"Maruthi",price:800000,color:'white',model:"Swift"},
    {brand:"Tata",price:1200000,color:'Grey',model:"Punch"},
    {brand:"Mahindra",price:1800000,color:'Black',model:"Scorpio"},
    {brand:"Toyota",price:4800000,color:'Black',model:"Fortuner"},
    {brand:"Tata",price:1400000,color:'white',model:"Nexon"},
    {brand:"Maruthi",price:1500000,color:'Green',model:"Jimmy"},
    {brand:"Tata",price:2800000,color:'Red',model:"Harrier"},
    {brand:"Tata",price:1000000,color:'Red',model:"Curv"},
    {brand:"Mahindra",price:1100000,color:'Black',model:"XUV300"},
    {brand:"BMW",price:5800000,color:'white',model:"x1"},
    {brand:"Mahindra",price:3200000,color:'Yellow',model:"XUV700"},
]
 // with filter
 /*
let car1 = cars.filter((car)=>{
    return car.price >= 5000000

})

console.log(car1)*/


let brand_cars=[]
for( car1 of cars){
    if (car1.brand ==='Tata'){
        brand_cars.push(car1)
    }
}

console.log(brand_cars)