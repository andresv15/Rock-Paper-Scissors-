// Creating variables to be able to keep score for each player
let playerWin = 0;
let computerWin = 0;
let roundCount = 1;

//Resets the score and round to start a new game 
function reset() {
    playerWin = 0;
    compuerWin = 0;
    roundCount = 0;
    head.textContent ='Time to play Some virtual Rock, Paper, Scissors!'
    playerScore.textContent = 'Player: 0';
    computerScore.textContent = 'Computer: 0';
}
function playGame() {
    for (i= 0; i< 5; i++) {
        playRound()
       }
    }
// Creating a function for the Computer user choices available.
function computerPlay() {
    const rpsChoices = ['rock','paper', 'scissors']
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)]

}
//Adding a single round: Player versus Computer... with these style of functions there are shortcuts to optimize them so you do you not have to write out all the code constistenly 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'){
        switch (computerSeelction) {
            case 'rock':
                roundCount++;
                head.Content = `It/'s a draw, you both oicked $(playerSelection.toLowercase()}!`;
                break;
            case 'paper':
                computerWin++;
                roundCount++;
                head.textContent = `You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
                break;
                `scissors`;
                playerWin++;
                roundCount++;
                head.textConent =  `You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
                break;
                default:
                    return "uh no.. something went wrong."
                    //This s being added just in case the computer p;ay function breaks or does not fumction properly.
        }
    }else if (playerSelection ---'paper'){
        switch (computerSelection){
            case 'rock':
                playerWin++;
                roundCount++;
                head.textContent =`'You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
                break;
            case 'paper':
                roundCount++;
                head.textContent = `It/'s a draw you both picked ${playerSelection.toLowerCase()}!`;
                break;
            case 'scissors':
                computerWin++;
                roundCoun++;
                head.textContent =`Youse lose, ${computerSelection} nrsyd ${PlayerSelection.toLowerCase()}!`;
            break;
            default;
                return "Uh no.. something went wrong here.";
                // Created in case computer play functions are not working probably
        }
    } else if (playerSelection === 'Scissors') {
        switch (computerSelection) {
            case 'rock':
                
        }
    }



        }
    }
            }
    }
}

