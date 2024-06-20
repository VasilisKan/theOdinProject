function playRound(humanchoice, computerChoice){

}


const humanSelection = gethumanChoice();
const computerSelection = getcomputerSelection();

playRound(humanSelection, computerSelection);

function gethumanChoice(){
    let userChoice = prompt("rock, paper or sciscors?");
    return userChoice;
}
function getcomputerSelection(){
    const randomNumber = Math.floor(Math.random()*3)+ 1;
    if (randomNumber === 1 ){ return "sciscors"
    } else if (randomNumber === 2){ return "paper"
    } else { return "rock"}
}
console.log(computerSelection)