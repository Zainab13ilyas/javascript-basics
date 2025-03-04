// Function Hoisting Example
console.log("Function Hoisting Example:");
sayHello(); // Works because function is hoisted

function sayHello() {
  console.log("Hello, world!");
}

// Var Hoisting Example
console.log("\nVar Hoisting Example:");
console.log(x); // Undefined (hoisted)
var x = 5;
console.log(x); // 5

// Let & Const Hoisting Example
console.log("\nLet & Const Hoisting Example:");
try {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
} catch (error) {
  console.log(error);
}
let y = 10;
console.log(y); // 10

// Hoisting in Local Scope - Example 1
console.log("\nHoisting in Local Scope - Example 1:");
try {
  print();
  console.log(firstName); // ReferenceError: name is not defined
} catch (error) {
  console.log(error);
}

function print() {
  var firstName = "John"; // 'name' is hoisted but remains undefined inside the function scope
}

// Hoisting in Local Scope - Example 2
console.log("\nHoisting in Local Scope - Example 2:");
printLocalScope();

function printLocalScope() {
  console.log(name); // undefined (hoisted but not initialized)
  var name = "Sam";
  console.log(name); // "John"
}
