arr = [1,2,34,5,2,123,8,43,234,58];

let avg = (arr)=>{
    let sum = 0;
    for(c of arr){
        sum+=c;
    }
    return sum/arr.length;
}
// console.log(avg(arr));

// let even = (n) =>{
//     return n%2==0;
// }

// console.log(even(23901));

// let message = "hello";

// let object = {
//     message: "Hello world!",
//     logMessage () {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);

let lenght = 4 ;
function callback(){
    console.log(this.length);
}

const object = {
    length :5,
    method(callback){
        callback();
    }
};
object.method(callback,1,2);