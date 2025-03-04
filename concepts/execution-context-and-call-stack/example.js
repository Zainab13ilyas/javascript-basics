// Global Execution Context Example
console.log("Global Execution Context Example:");

console.log(a); // Undefined (hoisted)
var a = 10;

greet(); // "Hello!" (function is hoisted)

function greet() {
  console.log("Hello!");
}

// Call Stack Example
console.log("\nCall Stack Example:");
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();
