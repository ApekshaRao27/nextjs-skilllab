let count = 10;
count = 20; // Allowed
console.log("Updated let:", count);

const PI = 3.14;
// PI = 3.14159;  Error: Cannot reassign const
console.log("Const value:", PI);

/* Object Mutation with const */
const user = {
  name: "K",
  role: "Developer"
};

// user = {};  Not allowed
user.role = "Admin"; //  Allowed (property change)
console.log("Updated object:", user);

/*
Const prevents reassignment,
but object properties can still be modified.
React prefers immutability (use spread instead).
*/

// Arrow Function

/* Convert normal function to arrow */
function greet(name) {
  return "Hello " + name;
}

const greetArrow = (name) => {
  return "Hello " + name;
};

console.log(greetArrow("abc"));

/* Single line arrow return */
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(5, 4));

/* Object Destructuring */
const person = {
  name: "Amit",
  age: 25,
  city: "Bangalore"
};

const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

/* Rename while destructuring */
const { city: location } = person;
console.log("City renamed:", location);

/* Nested Destructuring */
const product = {
  id: 1,
  details: {
    title: "Laptop",
    price: 50000
  }
};

const {
  details: { title, price }
} = product;

console.log("Product:", title, price);

/* Array Destructuring */
const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor] = colors;
console.log("First:", firstColor);
console.log("Second:", secondColor);

// SPREAD OPERATOR: 
/* Clone Array */
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];

clonedArray.push(4);

console.log("Original:", originalArray);
console.log("Cloned:", clonedArray);

// add numbers in array
const numberS = [2, 3];
const newNumbers = [1, ...numberS, 4];

/* Add item immutably */
const newArray = [...originalArray, 5];
console.log("New Array:", newArray);

/* Remove item immutably */
const filteredArray = originalArray.filter((num) => num !== 2);
console.log("Removed 2:", filteredArray);

/* Simulate state update */

let products = [
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 50000 }
];

/* Add product */
const addProduct = (newProduct) => {
  products = [...products, newProduct];
};

addProduct({ id: 3, name: "Tablet", price: 15000 });
console.log("After Add:", products);

/* Update product price */
const updatePrice = (id, newPrice) => {
  products = products.map((product) =>
    product.id === id ? { ...product, price: newPrice } : product
  );
};

updatePrice(1, 25000);
console.log("After Update:", products);

/* Remove product */
const removeProduct = (id) => {
  products = products.filter((product) => product.id !== id);
};

removeProduct(2);
console.log("After Remove:", products);
