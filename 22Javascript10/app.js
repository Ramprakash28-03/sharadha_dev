// let btn = document.querySelector("button");
// btn.onclick = function(){
//     console.log("The button was clicked !");
//     alert("you have clicked the button");
// }

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = onshow;
//     // btn.onmouseenter = onalert ;
// }
// for(btn of btns){
//     btn.onmouseenter = onalert ;
// }

// function onshow(){
//     console.log("Btn has clicked !");
// }
// function onalert(){
//     alert("Mouse is entered on the button");
// }

// let btne = document.querySelector("button");
// // btne.onmouseenter = function (){
// //     console.log("mouse is entered");
// // }
// btne.addEventListener("click",function (){
//     console.log("Hello i am event listener !");
// })
// btne.addEventListener("click",function (){
//     console.log("to kaise hai app log !");
// })
// btne.addEventListener("click",function(){
//     console.log("To mai ek aisa event listner hu jo ek se jada bar trigger ho sakta hai.")
// })


btn1 = document.querySelector("button");
// btn1.addEventListener("click",document.querySelector("div").style.backgroundColor = "rgb(rdmnum(),rdmnum(),rdmnum())");
btn1.addEventListener("click",function(){
    let n1 = rdmnum();
    let n2 = rdmnum();
    let n3 = rdmnum();
    document.querySelector("div").style.backgroundColor = `rgb( ${n1}, ${n2}, ${n3})`;
     console.log(`rgb( ${n1}, ${n2}, ${n3})`);
});

function rdmnum(){
    let num1 = Math.random()*256;
    // let num2 = Math.random()*255+1;
    // let num3 = Math.random()*255+1;
    // let arr = [num1,num2,num3];
    return Math.floor(num1);
}