// ** Game : Rock Paper Scissors**


let array = ["rock", "paper", "scissors"];
 
computerSelection = array[Math.floor(Math.random() *array.length)];

           
let ans = prompt("Rock, Paper or Scissors? Make your selection!");
playerSelection = ans.toLowerCase();

console.log ("You selected " + playerSelection, " Computer selected " + computerSelection);


function playRound() {
    if (playerSelection === computerSelection ) {
        console.log ("It is a tie!");
    }   
    
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors"){
            console.log ("You win! Rock beats Scissors")
        } else {
            console.log ("You lose! Paper beats rock")
        }
    } 
    else if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log ("You win! Paper beats rock")
        } else {
            console.log ("You lose! Scissors beats Paper")
        }
    } 
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper"){
            console.log ("You win! Scissors beats Paper")
        } else {
            console.log ("You lose! Rock beats Scissors")
        }
    } 
    else console.log ("Your selection is not valid.")
}

playRound();




