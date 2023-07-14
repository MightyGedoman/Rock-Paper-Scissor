console.log("Welcome");

const option = ["rock", "paper", "scissor"];

const buttons = document.querySelectorAll('button');



function getComputerChoice() {
    const choice = option[Math.floor(Math.random() * option.length)]
    return choice
}


function getPlayerChoice(callback) {
    buttons.forEach(button => button.addEventListener('click', () => {
      const player = button.textContent;
      callback(player);
    }));
}


// This is for the Typing method
/* function getPlayerChoice() {
    let valid = false;
    while(valid !== true){
        const choice = prompt('please input Rock, Paper, Scissor')
        if(choice == null){
            continue
        }
        const lowerChoice = choice.toLowerCase();
        if(option.includes(lowerChoice)){
            valid = true
            return lowerChoice
        }

        
    }
} */

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
        return 'Its a Tie'
    }
    else if(result == 'Player'){
        return `You won! computer picked ${computerSelection}`
    }
    else {
        return `You lost... computer picked ${computerSelection}`
    }

}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'Tie'
    }
    else if(
        (playerSelection == 'rock' && computerSelection == 'scissor') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')      
    ){
        return 'Player';
    }
    else {
        return 'Computer'
    }
}

function game(){
    let playerscore = 0
    let computerscore = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('-------------------------')
        if(checkWinner(playerSelection, computerSelection) == 'Player') {
            playerscore ++;
        }
        else if(checkWinner(playerSelection, computerSelection)){
            computerscore ++;
        }
    }
    if(playerscore > computerscore){
        console.log('Player has won!')
    }
    else if(playerscore < computerscore);{
        console.log('Computer has won')
    }

    console.log(`Player score is ${playerscore} and Computer score is ${computerscore}`);
    }



game()