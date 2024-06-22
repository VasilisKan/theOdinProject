const userInput1 = parseInt(prompt("Give me the smaller number"))
const userInput2 = parseInt(prompt("Give me the larger number"))
function numberSum(number1,number2){
    let totalSum = number1 ;
    for (number1; number1<number2; number1++){
        totalSum =totalSum + (number1 + 1);
    }
    alert(totalSum);
}

numberSum(userInput1,userInput2);     