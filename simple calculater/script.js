var sum = 0;
function add(x, y) {
    sum = x + y;
    return (sum);
}

var sub = 1;
function substract(x, y) {
    sub = x - y;
    return (sub);
}

var mul = 3;
function multiplay(x, y) {
    mul = x * y;
    return (mul)
}

var div = 2;
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

function press(num) {
    if (!operator) {
        num1 += num;
        document.getElementById('display').innerHTML = num1;
    } else {
        num2 += num;
        document.getElementById('display').innerHTML = num2;
    }
}

function setOP(op) {
    operator = op;
}

function calculate() {
    if (operator === '+') {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === '*') {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '/') {
        result = parseFloat(num1) / parseFloat(num2);
    }
    document.getElementById('display').innerHTML = result;
}

function clr() {
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('display').innerHTML = '0';
}
