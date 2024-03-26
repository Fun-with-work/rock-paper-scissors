// console.log ("Hello World");

// ** Game : Rock Paper Scissors**

// Make a variable getComputerChoice
// write a function which randomly returns either rock, paper or scissor

let array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    ComputerSelection = array[Math.floor(Math.random() *array.length)];
    console.log(ComputerSelection);
};

getComputerChoice();
// test this function to confirm it is working

// write a function that plays a single round of Rock Paper Scissors
// this function should have two parameters, the playerSelection and computerSelection
// the function should return a string that declares a winner or tie: "You lose! Paper beats Rock"
// playerSelection should be case insensitive

function playerSelection() {
    playerSelection = a.toLowerCase();

}


let a = prompt("Rock, Paper or Scissors? Make your selection!");




// return the results of this function call, not console.log()
// 

// write a new function called playGame()
// 
