// ===================================
// MINI-PROJECT: CALCULATOR
// ===================================

// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}
// Main calculator function
function calculate(num1, operator, num2) {

    switch (operator) {

        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}
// ===================================
// TESTING THE CALCULATOR
// ===================================

console.log("Addition:", calculate(10, "+", 5));

console.log("Subtraction:", calculate(10, "-", 5));

console.log("Multiplication:", calculate(10, "*", 5));

console.log("Division:", calculate(10, "/", 5));

console.log("Remainder:", calculate(10, "%", 3));

console.log("Power:", calculate(2, "**", 3));

console.log("Division by zero:", calculate(10, "/", 0));

console.log("Invalid operator:", calculate(10, "&", 5));