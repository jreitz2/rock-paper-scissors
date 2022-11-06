function getComputerChoice() {
    let computerSelection = ["Charmander", "Squirtle", "Bulbasaur"]
    return computerSelection[Math.floor(Math.random() * computerSelection.length)]
}

let playerSelection = prompt("Choose your Pokemon!");
console.log(playerSelection, "chosen by player.");

let computerSelection = getComputerChoice();
console.log(computerSelection, "chosen by computer.");

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection){
    let result ="";

    //computer is Charmander
    if (computerSelection == "Charmander" && playerSelection == "Squirtle") {
        result = "Squirtle douses Charmander! You win!"
        playerScore++;
    }
    else if (computerSelection == "Charmander" && playerSelection == "Bulbasaur") {
        result = "Charmander burns Bulbasaur! You lose!"
        computerScore++;
    }
    else if (computerSelection == "Charmander" && playerSelection == "Charmander") {
        result = "Tie!"
        
    }
    // Computer is Squirtle
    else if (computerSelection == "Squirtle" && playerSelection == "Charmander") {
        result = "Squirtle douses Charmander! You lose!"
        computerScore++;
    }
    else if (computerSelection == "Squirtle" && playerSelection == "Bulbasaur") {
        result = "Bulbasaur vine whips Squirtle! You win!"
        playerScore++;
    }
    else if (computerSelection == "Squirtle" && playerSelection == "Squirtle") {
        result = "Tie!"
                
    }
    // computer is Bulbasaur
    else if (computerSelection == "Bulbasaur" && playerSelection == "Squirtle") {
        result = "Bulbasaur vine whips Squirtle! You lose!"
        computerScore++;
    }
    else if (computerSelection == "Bulbasaur" && playerSelection == "Charmander") {
        result = "Charmander burns Bulbasaur! You win!"
        playerScore++;
    }
    else if (computerSelection == "Bulbasaur" && playerSelection == "Bulbasaur") {
        result = "Tie!"
        
    }
    return result;
}

console.log(playRound(computerSelection, playerSelection));

console.log("Player score = ", playerScore)
console.log("Computer score = ", computerScore)

// Loop the game 5 times

/*
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose pokemon");
        let computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection);
    }
}
console.log(game());

console.log("Player score = ", playerScore)
console.log("Computer score = ", computerScore)
*/
