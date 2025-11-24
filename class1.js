// Variable declarations
const firstName = "Hari 1"; // cannot be reassigned
let lastName = "Ram"; // can change value, cannot redeclare
var age = 25; // can change and redeclare

var age = 26; // can redeclare
age = 27; // can change value

console.log(firstName);
console.log("LastName:", lastName);
console.log("Age:", age);

// Global scope example
if (true) {
  const address = "Dillibazar"; // block scope
  let city = "Kathmandu"; // block scope
  var country = "Nepal"; // function/global scope
  console.log(address);
  console.log(city);
  console.log(country);
}

// console.log(address); // ❌ cannot access (block scope)
// console.log(city); // ❌ cannot access (block scope)
console.log(country); // ✅ can access (var is global/function scoped)

// Data types
const stringType = "This is a string";
const numberType = 123;
const booleanType = true;
const nullType = null;
let undefinedType;
let bigIntType = 711236812138n; // BigInt requires 'n'
let symbolType1 = Symbol("id");
let symbolType2 = Symbol("id");

console.log(typeof stringType);
console.log(typeof nullType);
console.log(typeof undefinedType);
console.log(typeof bigIntType);
console.log(symbolType1 == symbolType2); // false

// Operators
let x = 10;
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(true == 1); // true
console.log(true == "true"); // false
console.log(true === 1); // false
console.log(null == undefined); // true
console.log(0 == null); // false
console.log(0 === undefined); // false

// Comparison operators
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 == "5"); // true
console.log(5 !== "5"); // true

// Logical operators
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// Assignment operators
let a = 10;
a += 5; // a = a + 5
console.log(a); // 15

// Nullish coalescing operator (??)
let var1 = null;
let var2 = var1 ?? "default value";
console.log(var2); // "default value"

// Ternary operator
let age1 = 18;
let canVote = age1 >= 18 ? "yes" : "no";
console.log(canVote); // "yes"

// Conditional statements
if (true) {
  console.log("Condition is true");
} else if (1 == 1) {
  console.log("Else if true");
} else {
  console.log("Condition is false");
}

// Switch statement
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("For loop:", i);
}

let j = 0;
while (j < 5) {
  console.log("While loop:", j);
  j++;
}

do {
  console.log("Run once");
} while (false);

// Break and continue example
for (let k = 0; k < 10; k++) {
  if (k == 1) {
    continue; // skip iteration
  }
  if (k == 5) {
    break; // exit loop
  }
  console.log("Break example:", k);
}
