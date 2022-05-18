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
            case 'paper':
                playerWin++;
                roundCount++;
                head.textContent = `You win, ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
                 break;
            case 'rock':
                computerWin++;
                roundCount++;
                head.textContent = `You lose, ${computerSelection.toLowerCase()} beats ${playerSelection}!`;
                break;
            case 'scissors':
                    roundCount++;
                    head.textContent = `Its a draw you both picked ${playerSelection.toLowerCase}!`;
                break;
                default:
                    return "Uh no.. something went wrong here.";
                    //a function in case computer play functions are not working properly
            

        }
    }else {
        return `You have choose between Rock, Paper, and Scissors! Please Try Again!`


    }
}
const body = document.querySelector('body');
const head = document.querySelector('h1');
const buttons = document.querySelector('button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const  replayBtn = document.querySelector('button');
replayBtn.classList.add('replayBTn');
replayBtn.textContent = 'Play Again';

buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        if (playerWin === 5 || computerWin === 5) {
            console.log(`*start noises`);
        }else {
            playRound (button.id,computerPlay());
            playerScore.textContent = 'player: ${playerWin}';
            computerScore.textContent = 'computer: ${computerWin}';
         if (playerWin ===5) {
                head.textContent = 'Congratulations! You won a Game of RPS!';
                buttons.forEach((button) => {
                    button.classList.toggle('proof')
                });
                body.appendChild(replayBtn);
            }else if (computerWin ===5) {
                head.textContent = 'oh no!! You have lost the game to the computer.Keep on practing and Best of luck next time!'
                buttons.forEach((button) => {
                    button.classList.toggle('proof')
                 } );
                 body.appendChild(replayBtn);
                }
        }    
    });
}); 
    
replayBtn.addEventListener('click', () => {
    reset();
    buttons.forEach((button) => {
        button.classLIst.toggle('proof')
    });
    body.removeChild(replayBtn);
});


