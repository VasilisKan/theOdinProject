userInput= prompt("Give me a string to reverse");

const reverseString = function(stringToReverse){
    let reversedString = stringToReverse.split("").reverse().join("");
    return reversedString;
}

console.log(reverseString(userInput))