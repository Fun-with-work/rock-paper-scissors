// ** Game : Rock Paper Scissors**

   
    let y = 0; 
    let n = 0;

function playGame() {
   

    for (let count = 0; count<5; count++)  {
     

        let array = ["ROCK", "PAPER", "SCISSORS"];
        
    
        computerSelection = array[Math.floor(Math.random() *array.length)];
    
                
        let ans = prompt("ROCK, PAPER or SCISSORS? Make your selection!");
        playerSelection = ans.toUpperCase();
    
        console.log ("You selected " + playerSelection, " Computer selected " + computerSelection);
    
    
        function playRound() {
            if (playerSelection === computerSelection ) {
                console.log ("It is a tie!");
                // return playGame();
            }   
            
            else if (playerSelection === "ROCK") {
                if (computerSelection === "SCISSORS"){
                    console.log ("You win! ROCK beats SCISSORS")
                    y++;
                    return y;
                } else {
                    console.log ("You lose! PAPER beats ROCK")
                    n++;
                    return  n;
                }
            } 
            else if (playerSelection === "PAPER") {
                if (computerSelection === "ROCK"){
                    console.log ("You win! PAPER beats ROCK")
                    y++;
                    return y;

                } else {
                    console.log ("You lose! CISSORS beat PAPER")
                    n++;
                    return n;
                }
            } 
            else if (playerSelection === "SCISSORS") {
                if (computerSelection === "PAPER"){
                    console.log ("You win! SCISSORS beat PAPER")
                    y++;
                    return y;

                } else {
                    console.log ("You lose! ROCK beats SCISSORS")
                    n++;
                    return n;
                }
            } 
            else {
                console.log ("Your selection is not valid. Try again.")
                count-- ;
            }
    
        }
    
        playRound();

    

        
    } 
    console.log ("You Won " + y, "You lost " + n);

    if (y > n) {
        console.log ( "CONGRATULATIONS! YOU ARE THE WINNER!")
    }
    else if (y < n) {
        console.log ( "SORRY! YOU LOSE THE GAME!")
    }
    else  console.log ( "THIS GAME IS A TIE!")



    }
    
    playGame();












