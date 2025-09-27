// let address = {
//     longitude : "15.054390 E",
//     latitute : "34.053532 N"
// };


// const product = {
//     price : 69.99,
//     discount : "10 Percent ",
//     color : ["Red","Blue","Parrot Green "],
//     brand : "Louis Vitara"
// };


// const post = {
//     name: "Ram Prakash Gupta ",
//     age : 22,
//     content : "This is my first post",
//     Likes : 143,
//     shares : 5,
//     Resposts : 20
// };


// const higherLevelObjec = {
//     Ram : {
//         marks : "A",
//         age : 22,
//         gender : "male",
//         education : "4th year"
//     },
//     Aman : {
//         marks : "A+",
//         age : 21,
//         gender : "male",
//         eduation : "3rd year"
//     },
//     Sachin : {
//         marks : "O",
//         age : 23,
//         gender : "Male",
//         education : "12th pass"
//     }
// };


let range = Number(prompt("Give the range of number to play : "));


let guess = Math.floor(Math.random()*range+1);
let guesss = prompt("Give guess : ");
let count = 10;
while(count>0){
    if(guesss == "Quit"){
        console.log("You quit the game");
        break;
    }
    if(guesss==guess){
        console.log("You got it right the random number is ",guesss);
        break;
    }else if(guesss<guess){
        guesss=prompt("you guess is too small try again ");
    }else{
        guesss = prompt("your guess is too large try again ");
    }
    count--;
}
