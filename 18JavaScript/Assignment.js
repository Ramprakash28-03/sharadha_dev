
function higherArr(num)
{   let arr = [1,23,11,3,2,5,8,6,7,321,12,123,1299,9];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}


let str = "abcdefghijabcdefghiabcd";

let sum = function (str){
        let ans = "";
        for(let i = 0;i<str.length;i++){
        if(ans.indexOf(str[i]) == -1){
            ans+=str[i];
        }
    }
    console.log(ans);
    return ans;
}


let arr = ["india","japan","United State of America","paris","Pakistan"];
let long = function(arr){
    let ans = "";
    for(let i = 0;i<arr.length;i++){
        if(arr[i].length>ans.length){
            ans = arr[i];
        }
    }
    console.log(ans);
    return ans;
}


str = "abcdefghijklmnopqrstuvwxy";
let res = (str) => {
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]=='i' || str[i]=='u'){
            count++;
        }
    }
    console.log(count);
    return count;
};

// let st = parseInt(prompt("Give the start number "));
// let end = parseInt(prompt("Give the end number "));

// let num = Math.floor(Math.random()*(end-st)+st);
// console.log("The random number is : ",num);


// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// Agar hum second parameter nahi dege to uski jagah undefined ho jayega
// printInfo("Ram Prakash Gupta");