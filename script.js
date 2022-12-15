const btn = document.querySelectorAll('.btn');
const btnNum = document.querySelectorAll('.btn-number');
const screen = document.getElementById('screen');
const btnClear = document.getElementById('btn-clear');
let firstNum;
let secondNum;
let result;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a , b) {
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function eventLog(e) {
    console.log(e.target);
}

function displayNum(e) {
    const char = e.target.value;
    if (char == ',') {
        if (screen.value == '') {
            screen.value += '0' + char;
        }
    } else screen.value += char;
}


//btn.forEach(element => {element.addEventListener('click', eventLog)});
btnNum.forEach(element => {element.addEventListener('click', displayNum)});
btnClear.addEventListener('click', () => {screen.value = ''})