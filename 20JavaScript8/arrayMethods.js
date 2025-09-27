

array = ["ram","shayam","sita","Geeta"];

// foreach given array jitne elements hai us se print karta hai
array.forEach(element => {
    console.log(element);
});

// map us array ki copy banakar dusre array me store karta hai

let cpy = array.map(element =>{
    return element+"ji";
})

for(c of cpy){
    console.log(c);
}

let arr = [2,4,5,1,3,6,9,11,12,13,14,15] 

// filter se hum particular condition laga kar array me store karwa sakte hai 
let ans = arr.filter((ele) =>{
    return ele% 2 != 0;
})

// for(c of ans){
//     console.log(c);
// }  

// every function 2 hi cheez return karta hai true or false 
// agar array ke sare elements true return karege to true nahi to false 

// let res = arr.every((ele)=>{
//     return ele>3;
// })

// console.log(res);


// some function every function ka opposite hota hai agar function ka koi single element bhi true return kare ga to ye bhi true return kar dega nahi to agar sare element false return kare ge tabh hi ye false return kare ga

// console.log(arr.some(ele => {
//     return ele>14;
// }));
// console.log("ye true is liye aaya kiyu ki isme ek element 14 se greater hai");

// let result = arr.reduce((res,ele)=>{
//     return res+ele;
// })
// console.log(result);


// maximum elements using reduce function 

// let mx = arr.reduce((mx,ele) => {
//     if(mx>ele){
//         return mx;
//     }else return ele;
// });
// console.log(mx);



// default parameters means that we already assign the value of the parameter if the value is not given to the function calling then the already given value is useDebugValue

// eg 

// let summ = (a,b=5)=>{
//     return a+b;
// };


// agar hume array ya string ya object ke har ek element ko alag alag kar ke print karana ho to hum spread ka use karege 
// usko use karne ke liye hume sir ... ( 3 dots ka use karna hoga)

// eg

console.log(...arr);


// agar hum array se object banayege to jo array ka index hai wahi key value ka key ban jayega

// eg

// let object = {...arr};
// console.log(object);

// agar hume kisi 2 ya usse jada array ko merge karna hai to hum usme bhi spread ka use karte hai 
// let arrr=[1,323,53,541,8];
// let combined = [...arr,...arrr];
// console.log(combined);

// kisi bhi function ke andar ke andar already argument defined hota hai


// rest ka use multiple input lekar single output dene me hota hai 
// eg

// let and = (...args)=>{
//     return args.reduce((res,ele)=> {return res+ele;} )
// }

// destructuring ka mtlb hota hai ki array ke element ko kisi dusre element me copy karna

let [first,second,third,...others] = arr;
console.log(first);
console.log(second);
console.log(others);


