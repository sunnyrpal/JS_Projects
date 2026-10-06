 const prompt = require("prompt-sync")();
const target = Math.round(Math.round()*100)

let guesses =0;

while(true){
    guesses++;
    const guess = Number(prompt("you the number between (0-100): "))

    if(guess > target){
        console.log("your number is to high");
        continue;
        
    }else if(guess< target){
        console.log("your number is to low");
        continue;
        
    }{
        console.log("you guessed it");
        
    }
    break;
}
console.log(`you guess the number ${guesses} tries`);

