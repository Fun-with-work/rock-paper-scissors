// ** Game : Rock Paper Scissors**

// Make a variable getComputerChoice
// write a function which randomly returns either rock, paper or scissors
// test this function to confirm it is working

let array = ["rock", "paper", "scissors"];

 
computerSelection = array[Math.floor(Math.random() *array.length)];
// return (ans);



// write a function for playerSelection- should be case insensitive

            // function playerSelection() {
                
            // }

let ans = prompt("Rock, Paper or Scissors? Make your selection!");
playerSelection = ans.toLowerCase();

console.log ("You selected " + playerSelection, " Computer selected " + computerSelection);

// write a function that plays a single round of Rock Paper Scissors
// this function should have two parameters, the playerSelection and computerSelection
// the function should return a string that declares a winner or tie: "You lose! Paper beats Rock"
// return the results of this function call, not console.log()

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




