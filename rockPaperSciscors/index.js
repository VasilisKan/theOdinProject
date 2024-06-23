let humanscore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(getComputerChoice()){
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
            console.log(`Final score: Human ${humanscore} - Computer ${computerScore}`);
            console.log(`The final winner is: ${finalWinner}`);
        }
}
let answer;
function answerRock(){
    answer = "rock"}
function answerPaper(){
        answer = "paper"}
function answerScissors(){
    answer = "scissors"}
let humanChoice;
const btn = document.getElementsByClassName("resultButton");
btn.onClick() = function getHumanChoice(){
    humanChoice = answer
    return humanChoice
}

let  computerChoice;
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1){ return "rock"
    }else if (randomNumber === 2){ return "paper"
    }else{return "scissors"}
    }
computerChoice = getComputerChoice();
let finalWinner = (humanscore > computerScore) ? "Human" : 
                  (computerScore > humanscore) ? "Computer" : "Nobody";


playRound();