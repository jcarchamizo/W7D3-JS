// We ask the user for both numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// We validate numeric input
while (isNaN(num1) || isNaN(num2)) {
  alert("Enter valid numeric values.");
  num1 = parseFloat(prompt("Enter the first number:"));
  num2 = parseFloat(prompt("Enter the second number:"));
}

// We request the operation to be performed
let operation = prompt("What operation do you want to perform? (+ o -)");

// Function that adds and returns the result
function sumar(a, b) {
  return a + b;
}

// Function that subtracts and returns the result
function restar(a, b) {
  return a - b;
}

// Variable to save the result
let result;

// We choose the function according to the operation
if (operation === "+") {
  result = sumar(num1, num2);
  alert(`Result of the sum: ${result}`);
} else if (operation === "-") {
  resultado = restar(num1, num2);
  alert(`Result of the subtraction: ${result}`);
} else {
  alert("Invalid operation. Use + o -.");
}