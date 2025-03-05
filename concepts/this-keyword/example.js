// Global `this`
console.log("Global context:", this); // In browsers: `window`

// Regular function (strict mode)
function showThis() {
  "use strict";
  console.log("Regular function:", this); // `undefined`
}
showThis();

// Object method
const person = {
  name: "Alice",
  greet() {
    console.log("Object method:", this.name);
  },
};
person.greet(); // Alice

// `call` & `apply`
function introduce(age) {
  console.log(`My name is ${this.name} and I am ${age} years old.`);
}
const user = { name: "Charlie" };
introduce.call(user, 25);
introduce.apply(user, [30]);

// `bind`
const boundFunc = introduce.bind(user, 28);
boundFunc();

// Arrow function (inherits `this` from parent scope)
const obj2 = {
  name: "David",
  regularFunc: function () {
    console.log(this.name); // ❓ ("David")
  },
  arrowFunc: () => {
    console.log(this.name); // ❓ `undefined/window.name` (inherits from global)
  },
};

obj2.regularFunc();
obj2.arrowFunc();
