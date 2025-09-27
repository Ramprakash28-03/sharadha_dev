// let fav = "Bahubali";
// let guess = prompt("Give the guess of movie or quit :");

// while(guess != fav && guess != "quit"){
//     console.log("Wrong guess! try again ");
//     guess = prompt("Give the guess :")

// }
// if(guess == fav)
// console.log("You guess right");
// else console.log("you quit");


let Lists = [];
while(true){
    let task = prompt("Give the instruction to perform ");
    if(task == "Lists"){
        for(let i=0;i<Lists.length;i++){
            console.log(`${i} ${Lists[i]}`);
        }
    }else if(task == "Add"){
        let cur = prompt("Give the task to add");
        console.log("Task added successfully.")
        Lists.push(cur);
    }else if(task == "Remove"){
        let cur = Number(prompt("Give the index of task to delete"));
        console.log("Task deleted")
        Lists.splice(cur,1);
    }else if(task == "Quit"){
        break;
    }
    else{
        console.log("You have given the invalid input !");
    }
}