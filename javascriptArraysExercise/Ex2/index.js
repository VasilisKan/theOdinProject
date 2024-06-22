userInput = prompt("Type a random word");

function textRepeat(wordToRepeat) {
  let multiText = wordToRepeat.repeat(3); 
  console.log(multiText);
}

textRepeat(userInput);