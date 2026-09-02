const prompt  = require("prompt-sync")()

const answer = prompt("would you like to play game (y/n)")


if(answer.toLowerCase('')){
const answer2 = prompt("would you go left or right (left/right)")

if(answer2 === "left"){
    console.log("you go left and fall for a bridge ! you  lost")
}else{
    console.log("nice you go right and approach a bride")
    const answer3 = prompt("would you like to cross the  bridge  turn around another way  (turn/cross)")

    if(answer3=== "cross"){
    console.log(" you cross the bridge and reach end og the game")
}else{
    console.log("you turn back a long a trip and hurt your legs  you loss");


}
}

}else{
    console.log("bad news you lost")
}






