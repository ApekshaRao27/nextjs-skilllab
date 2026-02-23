
const player = {
  name: "Hero",
  level: 4,
  health: 100
};
const currentInventory = ["Sword", "Shield"];
const newInventory = ["Health Potion", "Map"];

// problem1. Update the player's level without modifying the original 'player' object:
const updatedPlayer ={...player,level:5}
console.log("Updated Player:", updatedPlayer);

// Problem2. Combine the inventories into one new array:
const finalInventory = [...currentInventory,...newInventory];
console.log(finalInventory);


// Problem 3: Increase Inventory Quantity
// updating stock levels in an inventory system.
const inventory = [
{ item: "Pen", quantity: 10 },
{ item: "Notebook", quantity: 5 },
{ item: "Pencil", quantity: 8 }
];
const updatedInventory = inventory.map(product => ({
    ...product,
    quantity: product.quantity + 2
}));
console.log(updatedInventory);

// Problem 4: Generate Full Name
// processing user profile data.
const users = [
{ firstName: "Ali", lastName: "Khan" },
{ firstName: "Sara", lastName: "Ahmed" }
];
const updatedUsers = users.map(user => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`
}));
console.log(updatedUsers);


// Problem 5: Mark High Priority Orders
// You are building an order processing feature.
const orders = [
    { id: 1, total: 250 },
    { id: 2, total: 80 },
    { id: 3, total: 150 }
];
const updatedOrders = orders.map(order => ({
    ...order,
    priority: order.total > 200 ? "True" : "False"
}));
console.log(updatedOrders);

