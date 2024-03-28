// ** Game : Rock Paper Scissors**


let winRound = 0;
let loseRound = 0;

function playGame() {


    for (let roundCount = 0; roundCount < 5; roundCount++) {


        let array = ["ROCK", "PAPER", "SCISSORS"];

        computerSelection = array[Math.floor(Math.random() * array.length)];

        let answer = prompt("ROCK, PAPER or SCISSORS? Enter your selection!");
        playerSelection = answer.toUpperCase();

        console.log("You selected " + playerSelection, " Computer selected " + computerSelection);


        function playRound() {
            if (playerSelection === computerSelection) {
                console.log("It is a tie!");                
            }

            else if (playerSelection === "ROCK") {
                if (computerSelection === "SCISSORS") {
                    console.log("You win! ROCK beats SCISSORS")
                    winRound++;
                    return winRound;
                } else {
                    console.log("You lose! PAPER beats ROCK")
                    loseRound++;
                    return loseRound;
                }
            }
            else if (playerSelection === "PAPER") {
                if (computerSelection === "ROCK") {
                    console.log("You win! PAPER beats ROCK")
                    winRound++;
                    return winRound;

                } else {
                    console.log("You lose! SCISSORS beat PAPER")
                    loseRound++;
                    return loseRound;
                }
            }
            else if (playerSelection === "SCISSORS") {
                if (computerSelection === "PAPER") {
                    console.log("You win! SCISSORS beat PAPER")
                    winRound++;
                    return winRound;

                } else {
                    console.log("You lose! ROCK beats SCISSORS")
                    loseRound++;
                    return loseRound;
                }
            }
            else {
                console.log("Your selection is not valid. Try again.")
                roundCount--;
            }

        }

        playRound();




    }
    console.log("You Won " + winRound, "You lost " + loseRound);

    if (winRound > loseRound) {
        console.log("CONGRATULATIONS! YOU ARE THE WINNER!")
    }
    else if (winRound < loseRound) {
        console.log("SORRY! YOU LOSE THE GAME!")
    }
    else console.log("THIS GAME IS A TIE!")



}

playGame();












