 const prompt = require("prompt-sync")();

 const  target = Math.round(Math.random()*100)

 let  guesses = 0;

 while(true){
        guesses++;


    const guess = Number(prompt("guess the number between (0-100): "))
    if(guess > target){
        console.log("you guess is to high")
        continue;
    }else if(guess< target){
        console.log("your guess is to low")
        continue;
    }
    
    
    {
        console.log("you guessed it ");
        
    }
    break

 }
     console.log(`you guess the number ${guesses}` );

