// console.log("Hello");
// console.log("Namaste");
// try and catch block hota hai error handling ke liye 
// try{
//     console.log(a);
// }catch{
//     console.log("a is not decleared in this scope ");
// }
// console.log("warikam");


// arrow function
// arrow function me agar koi parameter nahi dena to simple paranthesis laga sakte hai
// eg
let res = () => {
    console.log("Hi I am without parameter function");
}

let sum = (a,b) =>{
    return a+b;
}

// agar hum single parameter use kar rahe hai to bracket 
//  compulsory nahi hota eg.
const cube = n => {
    return n**3;
}


// agar hume maan lo return nahi likhna to hum kable arrow function bana sakte hai without return statement wala jisme automatic wo return kare ga 
// eg this is also called implict return 
const mul = (a,b) => (a*b);

// setTimeout apna kaam alag se karta rahta hai or sare function execute hote rahete hai
console.log("Hello America");
setTimeout(()=>{
    console.log("Hello india");
},2050);
console.log("Hello world");


// setInterval ek aisa function jis me particular time interval ke baad wo kaam chalta raheta hai
// eg 

// let id1 = setInterval(()=>{
//     console.log("Hello bro how are you!");
// },2000);

// let id2 = setInterval(()=>{
//     console.log("Hello buddy i am devil ");
// },2001);

// agar hume kisi interval to clear karna ho to hum simply likhte hai clearInterval(id of the interval  )



// lexical function scope meaning apne parents scope apne me copy karlena


// normal function ke liye this wo hota hai jo object us se call laga rahi hai 
// or arrow function ke liye this uska parent function hota hai 

let square = n =>(n*n);

let student = [
    {
        stu1:"Ram prakash",
        stu2:"Mahesh",
        stu3:"Suresh",
        stu4:"Jignesh",
        stu5:"rakesh",
    },
    {
        stu1:10,
        stu2:11,
        stu3:50,
        stu4:52,
        stu5:20
    },
    {
        stu1:"Male",
        stu2:"Male",
        stu3:"Male",
        stu4:"male",
        stu5:"Male"
    }
];

// student.forEach((element) => {
//     console.log(element.stu1);
// });

// ye for of loop hai jo ki har ek element ko print karata hai
for(stu of student){
    console.log(stu.stu1);
}
