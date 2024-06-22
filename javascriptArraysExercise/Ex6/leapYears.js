const userInput = parseInt(prompt('Type down a year'));

function leapYear(year){
    if (year > 0) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            alert('Year is leap');
        } else {
            alert('Year is not leap');
        }
    } else {
        alert('Please enter a valid positive year');
    }
}

leapYear(userInput);
