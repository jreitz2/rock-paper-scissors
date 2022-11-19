// function getComputerChoice() {
//     let computerSelection = ["Charmander", "Squirtle", "Bulbasaur"]
//     return computerSelection[Math.floor(Math.random() * computerSelection.length)]
// }

// let computerSelection = getComputerChoice();
// console.log(computerSelection, "chosen by computer.");

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection){
    
    const results = document.querySelector(".results");

    //computer is Charmander
    if (computerSelection == "Charmander" && playerSelection == "Squirtle") {
        results.textContent = "Squirtle douses Charmander! You win!";
        playerScore++;
        //console.log("Player score = ", playerScore);
    }
    else if (computerSelection == "Charmander" && playerSelection == "Bulbasaur") {
        results.textContent = "Charmander burns Bulbasaur! You lose!";
        computerScore++;
    }
    else if (computerSelection == "Charmander" && playerSelection == "Charmander") {
        results.textContent = "Tie!";
    }
    // Computer is Squirtle
    else if (computerSelection == "Squirtle" && playerSelection == "Charmander") {
        results.textContent = "Squirtle douses Charmander! You lose!";
        computerScore++;
    }
    else if (computerSelection == "Squirtle" && playerSelection == "Bulbasaur") {
        results.textContent = "Bulbasaur vine whips Squirtle! You win!";
        playerScore++;
    }
    else if (computerSelection == "Squirtle" && playerSelection == "Squirtle") {
        results.textContent = "Tie!";
                
    }
    // computer is Bulbasaur
    else if (computerSelection == "Bulbasaur" && playerSelection == "Squirtle") {
        results.textContent = "Bulbasaur vine whips Squirtle! You lose!";
        computerScore++;
    }
    else if (computerSelection == "Bulbasaur" && playerSelection == "Charmander") {
        results.textContent = "Charmander burns Bulbasaur! You win!";
        playerScore++;
    }
    else if (computerSelection == "Bulbasaur" && playerSelection == "Bulbasaur") {
        results.textContent = "Tie!";
        
    }
    const compChoice = document.querySelector(".comp");
    compChoice.innerHTML = `The computer chose: ${computerSelection}`;
    const score = document.querySelector(".score");
    score.innerHTML = `Player: ${playerScore} / Computer: ${computerScore}`;

    const results2 = document.querySelector(".results2");
        if (playerScore == 5) {
            results2.textContent = `You won 5 rounds!`;
            playerScore = 0;
            computerScore = 0;
            score.innerHTML = `Player: ${playerScore} / Computer: ${computerScore}`;
        }
        if (computerScore == 5) {
            results2.textContent = `The computer won 5 rounds!`;
            computerScore = 0;
            playerScore = 0;
            score.innerHTML = `Player: ${playerScore} / Computer: ${computerScore}`;
        }
}

const charChosen = document.querySelector(".char");
charChosen.addEventListener("click", () => {
    playerSelection = "Charmander";
    console.log(playerSelection, "chosen by player.");
    function getComputerChoice() {
        let computerSelection = ["Charmander", "Squirtle", "Bulbasaur"]
        return computerSelection[Math.floor(Math.random() * computerSelection.length)]
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection, "chosen by computer.");
    playRound(computerSelection, playerSelection); 
})

const squiChosen = document.querySelector(".squi");
squiChosen.addEventListener("click", () => {
    playerSelection = "Squirtle";
    console.log(playerSelection, "chosen by player.");
    function getComputerChoice() {
        let computerSelection = ["Charmander", "Squirtle", "Bulbasaur"]
        return computerSelection[Math.floor(Math.random() * computerSelection.length)]
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection, "chosen by computer.");
    playRound(computerSelection, playerSelection); 
})

const bulbChosen = document.querySelector(".bulb");
bulbChosen.addEventListener("click", () => {
    playerSelection = "Bulbasaur";
    console.log(playerSelection, "chosen by player.");
    function getComputerChoice() {
        let computerSelection = ["Charmander", "Squirtle", "Bulbasaur"]
        return computerSelection[Math.floor(Math.random() * computerSelection.length)]
    }
    let computerSelection = getComputerChoice();
    console.log(computerSelection, "chosen by computer.");
    playRound(computerSelection, playerSelection); 
})


