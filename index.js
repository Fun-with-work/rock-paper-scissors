// ** Game : Rock Paper Scissors**

let winRound = 0;
let loseRound = 0;
let array = ["Rock", "Paper", "Scissors"];

const beginGame = document.createElement("button");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const myResult = document.createElement("div");
const myScore = document.createElement("p");
const compScore = document.createElement("p");

beginGame.style.color = "gray";
beginGame.style.backgroundColor = "paleBlue";

myScore.style.color = "darkGreen";
myScore.style.border = "solid";
myScore.style.marginRight = "15px";

myScore.style.borderRadius = "20%";

compScore.style.color = "darkRed";
compScore.style.border = "solid";
compScore.style.borderRadius = "20%";


rock.style.backgroundColor = "paleBlue";
rock.style.marginLeft = "25px";
rock.style.marginRight = "25px";

paper.style.backgroundColor = "paleBlue";
paper.style.marginRight = "25px";

scissors.style.backgroundColor = "paleBlue";
myResult.style.color = "brown";
myResult.style.fontFamily = "helvetica";
myResult.style.marginTop = "50px";
myResult.style.textAlign = "center";


beginGame.textContent = "Click to  start the fun!";
myScore.textContent = " YourScore ";
compScore.textContent = "Computer Score ";
rock.textContent = "ROCK";
paper.textContent = "PAPER";
scissors.textContent = "SCISSORS";

begin.appendChild(beginGame);
score.appendChild(myScore);
score.appendChild(compScore);

let playerSelection;

const title = document.getElementById("myTitle");




beginGame.addEventListener("click", (e) => {

    title.appendChild(rock);
    title.appendChild(paper);
    title.appendChild(scissors);
    title.parentNode.insertBefore(myResult, title.nextSibling);

    playGame();
    // title.addEventListener("click", (e) => { playGame() });

    function playGame() {

        for (let roundCount = 0; roundCount < 5; roundCount++) {

            computerSelection = array[Math.floor(Math.random() * array.length)];


            playRound();

            function playRound() {

                rock.addEventListener("click", (e) => {
                    playerSelection = "Rock"

                    if (playerSelection === computerSelection) {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "It is a tie!";
                        return;
                    }
                    else if (computerSelection === "Scissors") {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You win! Rock beats Scissors."
                        winRound++;
                        myScore.innerText += winRound;
                        return winRound;
                    } else {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You lose! Paper beats Rock."
                        loseRound++;
                        compScore.innerText += loseRound;
                        return loseRound;
                    }

                });


                paper.addEventListener("click", (e) => {
                    playerSelection = "Paper"

                    if (playerSelection === computerSelection) {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "It is a tie!";
                        return;
                    }

                    else if (computerSelection === "Rock") {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You win! Paper beats Rock."
                        winRound++;
                        myScore.innerText += winRound;                        
                        return winRound;

                    } else {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You lose! Scissors beat Paper."
                        loseRound++;
                        compScore.innerText += loseRound;
                        return loseRound;
                    }


                });

                scissors.addEventListener("click", (e) => {
                    playerSelection = "Scissors"

                    if (playerSelection === computerSelection) {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "It is a tie!";
                        return;
                    }

                    else if (computerSelection === "Paper") {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You win! Scissors beat Paper."
                        winRound++;
                        myScore.innerText += winRound;
                        return winRound;

                    } else {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You lose! Rock beats Scissors."
                        loseRound++;
                        compScore.innerText += loseRound;
                        return loseRound;
                    }


                });

            }
        }
    }
});

// console.log("You Won " + winRound, "You lost " + loseRound);

// if (winRound > loseRound) {
//     console.log("CONGRATULATIONS! YOU ARE THE WINNER!")
// }
// else if (winRound < loseRound) {
//     console.log("SORRY! YOU LOSE THE GAME!")
// }
// else console.log("THIS GAME IS A TIE!")


// playGame();












