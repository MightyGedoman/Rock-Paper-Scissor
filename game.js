console.log("Welcome");

const option = ["rock", "paper", "scissor"];

let playerChoice = ''

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.textContent;
        game();
    });
});

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result === 'Tie'){
        return 'It\'s a Tie';
    }
    else if(result === 'Player'){
        return `You won! Computer picked ${computerSelection}`;
    }
    else {
        return `You lost... Computer picked ${computerSelection}`;
    }
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Tie';
    }
    else if(
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')      
    ){
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

function game(playerChoice){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        console.log(playRound(playerChoice, computerSelection));
        console.log('-------------------------');
        if(checkWinner(playerChoice, computerSelection) === 'Player') {
            playerScore++;
        }
        else if(checkWinner(playerChoice, computerSelection) === 'Computer'){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log('Player has won!');
    }
    else if(playerScore < computerScore){
        console.log('Computer has won');
    }
    console.log(`Player score is ${playerScore} and Computer score is ${computerScore}`);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * option.length);
    return option[randomIndex];
}
