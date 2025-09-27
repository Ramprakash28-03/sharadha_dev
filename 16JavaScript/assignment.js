let arr = [1,2,3,4,5,6,2,3];

for(let i=0;i<arr.length;i++){
    if(arr[i]==2){
        arr.splice(i,1);
    }
}

let num = parseInt(prompt("Give the number to count the digits "));
let count = 0;
while(num>=1){
    num/=10;
    count++;
}
console.log("The number of digits is ",count);

let sum = 0;
num = parseInt(prompt("Give the number to find the sum of digits"));

while(num>=1){
    sum+=(num%10);
    num=Math.floor(num/10);
}

console.log("Sum of digits is ",sum);


let nums = [1,58,2,8,75,89,5,11,12,13,19];
let cur = 0;
 
for(let i=0;i<nums.length;i++){
    if(nums[i]>cur){
        cur=nums[i];
    }
}
console.log("The largest number in array is ",cur);