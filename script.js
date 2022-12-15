const btn = document.querySelectorAll('.btn');

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

btn.forEach(element => {element.addEventListener('click', eventLog)})