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
let a = 0;
let b = 0;
let result = 0;

// Create function "operate"
function operate(operator, a, b) {
    return operator(a, b);
}