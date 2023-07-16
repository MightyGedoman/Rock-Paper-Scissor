console.log("Welcome");

const option = ["rock", "paper", "scissor"];

let computerScore = 0
let playerScore = 0
let round = 0
let playerSelection

const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * option.length);
    return option[randomIndex];
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        getPlayerChoice(button.textContent)
        playRound()
    })
});

function getPlayerChoice(choice) {
    playerSelection = choice
}


function roundChecker(playerSelection, computerSelection){
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


function playRound() {

    const computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    console.log(roundChecker(playerSelection, computerSelection));
    console.log(`Player score is ${playerScore} and Computer score is ${computerScore}`);
    console.log('-------------------------');
    if (checkWinner(playerSelection, computerSelection) === 'Player') {
        playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) === 'Computer') {
        computerScore++;
    }

    if (playerScore == 5 || computerScore == 5){
        endGame()
    }
};


function endGame(){
    if (playerScore > computerScore) {
        console.log('Player has won!');
    } else if (playerScore < computerScore) {
        console.log('Computer has won');
    }
}

