const prompt = require("prompt-sync")();

console.log("welcome to computer hardware projects")

let correctAnswers = 0;
const totalQuestion = 3

const answer1 = prompt("what is the brain of the computer? ")
const correctAnswer1 = "CPU"

if(answer1.toUpperCase()===correctAnswer1){
    console.log("you get it right");
    correctAnswers++

}else{
    console.log("you get it Wrong");

}



//Question 2

const answer2 = prompt("which is better 5000 or 70000: ")
const correctAnswer2 = "5000"

if(answer2.toUpperCase()===correctAnswer2){
    console.log("you get is right");
    correctAnswers++
    
}
else{
    console.log("you get is wrong");
    
}

const answer3 = prompt("what are the price of RAM in 2026: ")
const correctAnswer3 = "16GB";

if(answer3.toUpperCase()===correctAnswer3){
    console.log("you get it right");
    correctAnswers++
}else{
    console.log("you get  it wrong");
    
}
const parsent = Math.round((correctAnswers/totalQuestion)*100)
console.log(`you got the ${correctAnswers} "Question Correct`)
console.log(`Score is ${parsent.toString()} + " % "`)