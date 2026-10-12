const prompt  = require("prompt-sync")();
const answer = prompt("would you like to play game y/n: ");
if(answer.toLowerCase()==="y"){
    const answer2= prompt("would you like to go left or go right: ");

    if(answer2==="left"){
        console.log("opps you go and fall of bridge you lost.");
        
    }else{
     console.log("nice ! you go right and approach  a bridge");
     const answer3 = prompt("would  you like to cross the bridge turn around the another way cross/turn: ")



     if(answer3 === "cross"){
        console.log("nice you cross the bridge and reach end of the game");
        
     }else{
        console.log("you turn a back and trip on a log and hurt your leg . YOU LOSE");
        
     }
     
    }
     

}else{
    console.log("that is to bad");
    

}






































































