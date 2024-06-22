let array = [];

const userInput = function(){
    return prompt("Give me some car models");
}

function arrayMaker (){
    for (let i = 0; i < 4; i++){
        let input = userInput();
        array.push(input); 
    }
    return array;
}

function arrayRemoveElement(arrayToRemove, elementToRemove){
    let finalArray = arrayToRemove.pop(elementToRemove);
    return console.log(array);
}


arrayMaker();
arrayRemoveElement(array,1);