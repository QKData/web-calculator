// Basic math fuctions
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return b === 0 ? "error" : a / b;
};

// Create three variables
let firstNumber = null;
let operator = null;
let secondNumber = null;
let shouldResetDisplay = false;

// DOM
const display = document.querySelector('#display');
const buttons = document.querySelector('#btn');

// Create function "operate"
function operate(op, a, b) {
    const operations = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '/': divide
    };

    const result = operations[op](parseFloat(a), parseFloat(b));
    return typeof result === 'number' ?
        Math.round(result * 1000000) / 1000000 : result;
}

// Create function update display
function updateDisplay(value) {
    if (value.toString().length > 9) {
        return;
    }
    display.textContent = value;
}

// Handle number input
function handleNumber(number) {
    if (shouldResetDisplay) {
        updateDisplay('');
        shouldResetDisplay = false;
    }
    
    const currentDisplay = display.textContent;
    if (currentDisplay === '0' || currentDisplay === 'Error: Division by zero') {
        updateDisplay(number);
    } else {
        updateDisplay(currentDisplay + number);
    }
}

// Handle operator
function handleOperator(op) {
    if (firstNumber === null) {
        firstNumber = display.textContent;
        operator = op;
        shouldResetDisplay = true;
    } else if (operator) {
        const result = operate(operator, firstNumber, display.textContent);
        if (result === 'Error: Division by zero') {
            clear();
            updateDisplay(result);
            return;
        }
        updateDisplay(result);
        firstNumber = result;
        operator = op;
        shouldResetDisplay = true;
    }
}

// Handle equals
function handleEquals() {
    if (firstNumber === null || operator === null) return;
    
    const result = operate(operator, firstNumber, display.textContent);
    updateDisplay(result);
    firstNumber = null;
    operator = null;
    shouldResetDisplay = true;
}

// Clear function
function clear() {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    updateDisplay('0');
    shouldResetDisplay = false;
}

// Handle decimal
function handleDecimal() {
    if (shouldResetDisplay) {
        updateDisplay('0.');
        shouldResetDisplay = false;
        return;
    }
    
    if (!display.textContent.includes('.')) {
        updateDisplay(display.textContent + '.');
    }
}

// Handle backspace
function handleBackspace() {
    const currentDisplay = display.textContent;
    if (currentDisplay.length === 1 || currentDisplay === 'Error: Division by zero') {
        updateDisplay('0');
    } else {
        updateDisplay(currentDisplay.slice(0, -1));
    }
}

// Handle negative toggle
function handleNegative() {
    const currentDisplay = display.textContent;
    if (currentDisplay !== '0' && currentDisplay !== 'Error: Division by zero') {
        updateDisplay((-1 * parseFloat(currentDisplay)).toString());
    }
}

// Event listeners
buttons.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    if (e.target.matches('#btnac')) {
        clear();
    } else if (e.target.matches('#backspace')) {
        handleBackspace();
    } else if (e.target.matches('#btndecimal')) {
        handleDecimal();
    } else if (e.target.matches('.operator')) {
        handleOperator(e.target.textContent);
    } else if (e.target.matches('#btnequal')) {
        handleEquals();
    } else if (e.target.matches('#negative')) {
        handleNegative();
    } else {
        handleNumber(e.target.textContent);
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if (key >= '0' && key <= '9') {
        handleNumber(key);
    } else if (key === '.') {
        handleDecimal();
    } else if (key === '+' || key === '-') {
        handleOperator(key);
    } else if (key === '*') {
        handleOperator('x');
    } else if (key === '/') {
        e.preventDefault();
        handleOperator('/');
    } else if (key === 'Enter' || key === '=') {
        handleEquals();
    } else if (key === 'Backspace') {
        handleBackspace();
    } else if (key === 'Escape') {
        clear();
    }
});