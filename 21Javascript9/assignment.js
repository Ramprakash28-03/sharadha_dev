let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "Click me";

document.querySelector("body").append(btn);
document.querySelector("body").append(input);

let area = document.createElement("textarea");
input.setAttribute("id","username");
input.setAttribute("placeholder","username");

btn.setAttribute("id","btn");
btn.getAttribute("id");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").prepend(h1);
h1.classList.add("dom");

let p3 = document.createElement("p");
p3.innerHTML = "Apna College <b> delta </b> practice";
document.querySelector("body").append(p3);
