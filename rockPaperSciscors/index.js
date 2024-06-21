let humanscore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice === "scissors" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "rock" && computerChoice === "scissors") {
        humanscore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("Computer wins this round!");
    }
}

function getHumanChoice() {
    let userChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return userChoice;
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1){ return "rock"
    }else if (randomNumber === 2){ return "paper"
    }else{return "scissors"}
    
}

for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

let finalWinner = (humanscore > computerScore) ? "Human" : 
                  (computerScore > humanscore) ? "Computer" : "Nobody";

console.log(`Final score: Human ${humanscore} - Computer ${computerScore}`);
console.log(`The final winner is: ${finalWinner}`);
