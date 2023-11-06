/* 
   Filename: ComplexCalculator.js
   This code implements a complex calculator with advanced mathematical functions and a user-friendly interface.
*/

// Constants for mathematical operations
const ADDITION = 'addition';
const SUBTRACTION = 'subtraction';
const MULTIPLICATION = 'multiplication';
const DIVISION = 'division';
const POWER = 'power';

// Function to perform mathematical operations
function performOperation(operation, num1, num2) {
  switch (operation) {
    case ADDITION:
      return num1 + num2;
    case SUBTRACTION:
      return num1 - num2;
    case MULTIPLICATION:
      return num1 * num2;
    case DIVISION:
      return num1 / num2;
    case POWER:
      return Math.pow(num1, num2);
    default:
      return "Invalid operation";
  }
}

// Function to handle user input and display output
function calculator() {
  let num1 = Number(prompt("Enter the first number:"));
  let num2 = Number(prompt("Enter the second number:"));

  console.log(`Performing calculations with ${num1} and ${num2}:`);
  console.log(`Addition: ${performOperation(ADDITION, num1, num2)}`);
  console.log(`Subtraction: ${performOperation(SUBTRACTION, num1, num2)}`);
  console.log(`Multiplication: ${performOperation(MULTIPLICATION, num1, num2)}`);
  console.log(`Division: ${performOperation(DIVISION, num1, num2)}`);
  console.log(`Power: ${performOperation(POWER, num1, num2)}`);
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Function to convert a decimal number to binary
function decimalToBinary(decimal) {
  let binary = '';
  let temp = decimal;
  while (temp > 0) {
    binary = (temp % 2) + binary;
    temp = Math.floor(temp / 2);
  }
  return binary;
}

// UI interactions
console.log("Welcome to the Complex Calculator!");
console.log("Please choose an option:");
console.log("1. Basic Calculator");
console.log("2. Advanced Mathematical Functions");
console.log("3. Random Number Generator");
console.log("4. Check if a Number is Prime");
console.log("5. Convert Decimal to Binary");

let option = Number(prompt("Enter your option (1-5):"));

switch (option) {
  case 1:
    calculator();
    break;
  case 2:
    console.log(`6! = ${factorial(6)}`);
    break;
  case 3:
    let min = Number(prompt("Enter minimum range:"));
    let max = Number(prompt("Enter maximum range:"));
    console.log(`Random number between ${min} and ${max}: ${getRandomNumber(min, max)}`);
    break;
  case 4:
    let numberToCheck = Number(prompt("Enter a number to check if it is prime:"));
    console.log(`${numberToCheck} is ${isPrime(numberToCheck) ? 'prime' : 'not prime'}.`);
    break;
  case 5:
    let decimalNumber = Number(prompt("Enter a decimal number:"));
    console.log(`Binary representation of ${decimalNumber}: ${decimalToBinary(decimalNumber)}`);
    break;
  default:
    console.log("Invalid option");
}

// End of code