// html file me kuch bhi save ho usse matter nahi hota if you want to manipulate through java script you can 


// document.getElementById("mainImg").src = "assets/creation_1.png";

// console.log(img);

// let img =  document.getElementsByClassName("oldImg") ;
// for(let i = 0;i<img.length;i++){
//     img[i].src ="assets/spiderman_img.png";
// };


// query selector is simply like selector in css but it only select single element in a time 
// if you want to select all similar type of same element so you need to use allqueryselector

// let dmt = document.querySelectorAll(".oldImg");

// let img = document.getAttributes("Img");

let para = document.createElement("p");
para.innerText = "Hey I'm red!";
document.querySelector("body").append(para);

para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText="I'm a blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");


let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
let p1 = document.createElement("p");
p1.innerText = "ME Too!";

div.append(h1);
div.append(p1);
div.classList.add("mod");
document.querySelector("body").append(div);
