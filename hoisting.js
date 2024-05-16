value = 2024
console.log('Value', value)
// Will show "2024"

var value

console.log('Another Value', anotherValue)
// Will show "undefined"

var anotherValue = 2024

newLet = 2024
console.log('New Let', newLet)
// Will throw an error like this:
// ReferenceError: Cannot access 'newLet' before initialization

let newLet

console.log('Another Let', anotherLet)
// Will throw an error like this:
// ReferenceError: Cannot access 'anotherLet' before initialization

let anotherLet = 2024

console.log('Another Const', anotherConst)
// Will throw an error like this:
// ReferenceError: Cannot access 'anotherConst' before initialization

const anotherConst = 2024

sayHello("John");
function sayHello(name) {
  console.log("Hello " + name);
}
// Will show "Hello John"

sayGoodbye("John");
const sayGoodbye = (name) => {
  console.log("Goodbye " + name);
};
// Will throw an error like this:
// ReferenceError: Cannot access 'sayGoodbye' before initialization

saySomething("John");
const saySomething = function (name) {
  console.log("Something, " + name);
};
// Will throw an error like this:
// ReferenceError: Cannot access 'saySomething' before initialization

const newCar = new Car();

class Car {}
