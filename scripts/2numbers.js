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

// Function that adds without return
function sum(a, b) {
  alert(`Result of the sum: ${a + b}`);
}

// Function that subtracts without return
function restar(a, b) {
  alert(`Result of the subtraction: ${a - b}`);
}

// Logic according to the operation
if (operation === "+") {
  sum(num1, num2);
} else if (operation === "-") {
  subtract(num1, num2);
} else {
  alert("Invalid operation. Use + o -.");
}