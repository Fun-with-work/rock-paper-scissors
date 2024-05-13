// ** Game : Rock Paper Scissors**

let winRound = 0;
let loseRound = 0;
let array = ["Rock", "Paper", "Scissors"];

const beginGame = document.createElement("button");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const myResult = document.createElement("div");
const finalScore = document.createElement("p");
const labelMyScore = document.createElement("p");
const labelCompScore = document.createElement("p");
const myScore = document.createElement("p");
const compScore = document.createElement("p");

beginGame.style.color = "navyBlue";
beginGame.style.marginLeft = "30px";
beginGame.style.backgroundColor = "lightBlue";

labelMyScore.style.marginRight = "25px";
myScore.style.paddingLeft = "75px";
myScore.style.paddingRight = "75px";
myScore.style.color = "darkGreen";
myScore.style.backgroundColor = "lightBlue";
myScore.style.border = "solid";
myScore.style.marginRight = "15px";
myScore.style.borderRadius = "20%";

compScore.style.color = "darkRed";
compScore.style.backgroundColor = "lightBlue";
compScore.style.border = "solid";
compScore.style.borderRadius = "20%";
finalScore.style.fontSize = "1.2rem";
finalScore.style.textAlign = "center";

rock.style.backgroundColor = "paleBlue";
rock.style.marginLeft = "25px";
rock.style.marginRight = "25px";
paper.style.backgroundColor = "paleBlue";
paper.style.marginRight = "25px";
scissors.style.backgroundColor = "paleBlue";

myResult.style.color = "navyBlue";
myResult.style.fontFamily = "helvetica";
myResult.style.flex = "inline";
myResult.style.marginTop = "50px";
myResult.style.marginLeft = "50px";
myResult.style.textAlign = "left";

beginGame.textContent = "Click to start the fun!";
labelMyScore.textContent = "Player Score";
labelCompScore.textContent = "Computer Score";
rock.textContent = "ROCK";
paper.textContent = "PAPER";
scissors.textContent = "SCISSORS";

begin.appendChild(beginGame);
score.appendChild(labelMyScore);
score.appendChild(labelCompScore);
labelMyScore.appendChild(myScore);
labelCompScore.appendChild(compScore);

let playerSelection;
const title = document.getElementById("myTitle");


beginGame.addEventListener("click", (e) => {

    title.appendChild(rock);
    title.appendChild(paper);
    title.appendChild(scissors);
    title.parentNode.insertBefore(myResult, title.nextSibling);
    myResult.parentNode.insertBefore(finalScore, title.nextSibling);

    playGame();


    function playGame() {


        playRound();

        function playRound() {


            rock.addEventListener("click", (e) => {

                if (winRound < 5 && loseRound < 5) {
                    playerSelection = "Rock"
                    computerSelection = array[Math.floor(Math.random() * array.length)];

                    if (playerSelection === computerSelection) {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "It is a tie!\n";
                        return;
                    }
                    else if (computerSelection === "Scissors") {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You win! Rock beats Scissors.\n"
                        winRound++;

                        myScore.innerText = "";
                        myScore.innerText += winRound;
                        return winRound;
                    } else {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You lose! Paper beats Rock.\n"
                        loseRound++;
                        compScore.innerText = "";
                        compScore.innerText += loseRound;
                        return loseRound;
                    }
                }
                else finalResult();
            });


            paper.addEventListener("click", (e) => {

                if (winRound < 5 && loseRound < 5) {
                    playerSelection = "Paper"
                    computerSelection = array[Math.floor(Math.random() * array.length)];

                    if (playerSelection === computerSelection) {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "It is a tie!\n";
                        return;
                    }

                    else if (computerSelection === "Rock") {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You win! Paper beats Rock.\n"
                        winRound++;
                        myScore.innerText = "";
                        myScore.innerText += winRound;
                        return winRound;

                    } else {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You lose! Scissors beat Paper.\n"
                        loseRound++;
                        compScore.innerText = "";
                        compScore.innerText += loseRound;
                        return loseRound;
                    }
                }
                else finalResult();

            });

            scissors.addEventListener("click", (e) => {

                if (winRound < 5 && loseRound < 5) {
                    playerSelection = "Scissors"
                    computerSelection = array[Math.floor(Math.random() * array.length)];

                    if (playerSelection === computerSelection) {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "It is a tie!\n";
                        return;
                    }

                    else if (computerSelection === "Paper") {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You win! Scissors beat Paper.\n"
                        winRound++;
                        myScore.innerText = "";
                        myScore.innerText += winRound;
                        return winRound;

                    } else {
                        myResult.innerText += "You selected " + playerSelection + " Computer selected " + computerSelection + ".";
                        myResult.innerText += "You lose! Rock beats Scissors.\n"
                        loseRound++;
                        compScore.innerText = "";
                        compScore.innerText += loseRound;
                        return loseRound;
                    }
                }
                else finalResult();
            });
        }
        // }
    }
});


function finalResult() {
    finalScore.innerText = "You Won " + winRound + ", You lost " + loseRound +"\n";
    (winRound > loseRound)? finalScore.innerText += "CONGRATULATIONS! YOU ARE THE WINNER!" 
    :  finalScore.innerText += "SORRY! YOU LOSE THE GAME!"

}














