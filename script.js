const btn = document.querySelectorAll('.btn');
const btnNum = document.querySelectorAll('.btn-number');
const screen = document.getElementById('screen');
const btnClear = document.getElementById('btn-clear');
const btnOperator = document.querySelectorAll('.btn-operator');
const btnEqual = document.getElementById('btn-equal');
let firstNum = '';
let secondNum = '';
let result = 0;
let stateNew = false;
let currentOperation = '';

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
function divide(a, b) {
    return a / b;
}

// exponentiation function
function power(a, b) {
    return Math.pow(a, b);
}

function makeResult() {
    secondNum = screen.value;

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    console.log(currentOperation);
    switch (currentOperation) {
        case 'add':
            result = add(firstNum, secondNum);
            break;
        case 'subtract':
            result = subtract(firstNum, secondNum);
            break;
        case 'multiply':
            result = multiply(firstNum, secondNum);
            break;
        case 'divide':
            result = divide(firstNum, secondNum);
            break;
        case 'power':
            result = power(firstNum, secondNum);
            break;
        default:
            break;
    }
    stateNew = true;
    screen.value = result;
    firstNum = result;
}

// takes the number inputted and do the math operation by calling relevant function
function operate(e) {
    secondNum = screen.value;

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (currentOperation) {
        case 'add':
            result = add(firstNum, secondNum);
            break;
        case 'subtract':
            result = subtract(firstNum, secondNum);
            break;
        case 'multiply':
            result = multiply(firstNum, secondNum);
            break;
        case 'divide':
            result = divide(firstNum, secondNum);
            break;
        case 'power':
            result = power(firstNum, secondNum);
            break;
        default:
            break;
    }

    if (firstNum == '') {
        firstNum = secondNum;
        result = firstNum;
    }
    
    screen.value = result;
    
    firstNum = result;
    
    currentOperation = e.target.value;
    stateNew = true;
}

// function to check whether event listener works properly or not by logging the target element to the console
function eventLog(e) {
    console.log(e.target);
}


// function to update the screen everytime a button is pressed
function displayNum(e) {
    if (stateNew) {
        screen.value = '';
        stateNew = false;
    }
    if (screen.value == '0' && e.target.value == '0') { // 
        return;
    } else if (screen.value == '0') {
        screen.value = '';
    }

    if (screen.value.length > 10) {                     // limit the screen to 11 characters
        return;
    }
    const char = e.target.value;
    if (char == '.') {                                  // comma logic
        if (screen.value == '') {                       // these lines of code is to make sure
            screen.value += '0' + char;                     // that there's only one comma on screen
        } else if (screen.value.search(/\d*\./)) {
            screen.value += char;
        }                                               // end of the comma logic

    } else screen.value += char;
    stateNew = false;
}

btnNum.forEach(element => { element.addEventListener('click', displayNum) });
btnClear.addEventListener('click', () => {
    result = 0;
    firstNum = '';
    secondNum = '';
    screen.value = result;
    console.clear();
});
btnOperator.forEach(element => { element.addEventListener('click', operate) });
btnEqual.addEventListener('click', () => { 
    makeResult();
    screen.value = result;
});