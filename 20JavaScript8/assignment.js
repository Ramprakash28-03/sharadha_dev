let square = (arr)=>{
    let sum = 0;
    for(let i=0;i<arr.length ;i++){
        arr[i]=arr[i]*arr[i]+arr[i];
        sum+=arr[i];
    }
    return sum/arr.length;
}

arr = [1,2,3,4,5,6];
// console.log(square(arr));
let newarr = arr.map((n)=>{
    return n+5;
})
// console.log(newarr);

let ans = ["Ram",""]