const btn = document.querySelectorAll('.btn');
const btnNum = document.querySelectorAll('.btn-number');
const screen = document.getElementById('screen');
const btnClear = document.getElementById('btn-clear');
let firstNum;
let secondNum;
let result;

// addition function
function add(a, b) {
    return a + b;
}

// subtraction function
function subtract(a, b) {
    return a - b;
}

// multiplication function
function multiply(a, b) {
    return a * b;
}

// division function
function divide(a , b) {
    return a / b;
}

// exponentiation function
function power(a, b) {
    return Math.pow(a, b);
}

// function to check whether event listener works properly or not by logging the target element to the console
function eventLog(e) {
    console.log(e.target);
}


// function to update the screen everytime a button is pressed
function displayNum(e) {
    if (screen.value.length > 10) {                     // limit the screen to 11 characters
        return;
    }
    const char = e.target.value;
    if (char == ',') {                                  // comma logic
        if (screen.value == '') {                       // these lines of code is to make sure
        screen.value += '0' + char;                     // that there's only one comma on screen
        } else if (screen.value.search(/\d*,/)) {       
            screen.value += char;                       
        }                                               // end of the comma logic
        
    } else screen.value += char;
}

btnNum.forEach(element => {element.addEventListener('click', displayNum)});
btnClear.addEventListener('click', () => {screen.value = ''})