let func = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

func.addEventListener("click",function(evnt){
    console.log("you have clicked on Div");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("unorderd list was clicked.");
})

for(let li of lists){
    li.addEventListener("click",function (evnt) {
        evnt.stopPropagation();
        console.log("List was clicked");
    });
}

// Event_bubbling means jab koi child event listener trigger hota hai to
//  uske parents ke bhi event listner bhi trigger ho jate hai

// event bubbling ko rokne ke liye hum ek method ka use karte hai jika naam hai stop propogation