// console.log("Hello world!")
// console.log("My name is Ram Prakash Gupta")

let pencilPrice = 10;
let eraserPrice = 20;
// console.log("the total price of the things is : ",pencilPrice+eraserPrice, "This is the output");

let output=`The total price of the elements is ${pencilPrice+eraserPrice} Rupees.`;
// is process me hum teeno ko add kar diye without concatnation ka use kiye usse template literals kahete hai

let day=8;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

console.log("This is end of the statement");

// alert and prompt is two special method in javascript in which alert is used for showing alerts and prompt is used for taking input from user

// alert("This code shows an error!");

let first_name = prompt("Give your first name");
let lastName = prompt("Give your last name");
console.log(first_name + lastName);
alert("Hi! "+first_name+lastName);


// in javascript we also have some thing called error 
// console.error("Your code is showing some error")

//It also have warning by warn

// console.warn("You are doing something wrong !")
