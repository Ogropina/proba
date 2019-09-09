let myName= "Ogropina";
const myAge= 40;
const printGretiings=name=>{
    console.log("Hello " + name);
};
printGretiings(myName);
printGretiings("Ogropina" + ", you are :" + myAge);
//Выведим все нечетные числа из диапазона 15-35
for (let i=15; i<=35; i++){
    if (i%2!=0){
        console.log(i);
    }
}
//Реализум функцию range
const rage = (start,end)=>{
for(let i=start; i<=end; i++){
    if(i%2!=0){
        console.log(i);
    }
}
}
;

rage(15,35);