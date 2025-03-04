// Global vs. Local Scope Example
console.log("🔹 Global vs. Local Scope:");
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // ✅ Accessible
  console.log(localVar); // ✅ Accessible
}

testScope();
try {
  console.log(localVar); // ❌ ReferenceError: localVar is not defined
} catch (error) {
  console.log(error);
}

// Function Scope vs. Block Scope Example
console.log("\n🔹 Function Scope vs. Block Scope:");

function scopeTest() {
  if (true) {
    var functionScoped = "I am function-scoped";
    let blockScoped = "I am block-scoped";
  }
  console.log(functionScoped); // ✅ Works
  try {
    console.log(blockScoped); // ❌ ReferenceError
  } catch (error) {
    console.log(error);
  }
}

scopeTest();

// Lexical Scope & Closures Example
console.log("\n🔹 Lexical Scope & Closures:");

function outerFunction() {
  let outerVar = "Hello";

  function innerFunction() {
    console.log(outerVar); // ✅ Inner function remembers outerVar
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: "Hello"

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

// Hoisting in Local Scope - Example 3
console.log("\nHoisting in Local Scope - Example 3:");
var x = 21;
var function1 = function () {
  console.log(x); // undefined (hoisted but not initialized in the function/local scope)
  var x = 20;
};
function1();
