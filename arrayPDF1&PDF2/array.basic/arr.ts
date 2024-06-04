//  Part 1: Basic Arrays - Product Inventory
//  Challenge:

//      You are tasked with creating a Product Inventory system. Implement functions and logic to 
//      manage object manipulation effectively.


//      1. Define a type alias named Product to represent a product with the following 
//         properties:
//          • name (string): The name of the product.
//          • price (number): The price of the product.
//          • inventory (object): An object containing inventory details including:
//          • stock (number): The number of products available.
//          • colorOptions (string[ ]): An array listing available colors.
type Product = {
    name:string;
    price:number;
    inventory: {
        stock:number;
        colorOptions:string[];
    }
}

//2. Create an array named products containing at least three product objects. Each 
//product object should include a name, price, and inventory details.
// 2. Create products array

var products = [
    {
        name: 'Product 1',
        price: '100',
        inventory: {
            stock: '10',
            colorOptions: ['red', 'blue', 'green'],
        },
    },
    {
        name: 'Product 2',
        price: '200',
        inventory: {
            stock: '20',
            colorOptions: ['red', 'blue'],
        },
    },
    {
        name: 'Product 3',
        price: '300',
        inventory: {
            stock: '30',
            colorOptions: ['green', 'yellow'],
        },
    },
];

//3. Implement a function named changeColor that takes a product object and a new 
//color as input. This function should update the color property of the product and 
//adjust the price based on the new color (implement your own logic, e.g., increase by 


// Implement the changeColor function
function changeColor(product, newColor) {
    // Update the color property
    product.inventory.colorOptions.push(newColor);
    // Adjust the price based on the new color
    if (newColor === 'red') {
        product.price *= 1.1; // Increase by 10%
    }
    else if (newColor === 'blue') {
        product.price *= 0.95; // Decrease by 5%
    }
}

// 4. Display each product's name, price, stock, and available colors. Iterate through the 
// products array and print each product's details
// Display each product's details
products.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(', ')));
    console.log('---');
});
// Example usage of the changeColor function
changeColor(products[0], 'red');
console.log('After changing color:');
products.forEach(function (product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(', ')));
    console.log('---');
});


// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to 
// manage object manipulation effectively.
// 1. Define a type alias named Product to represent a product with the following 
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
// 2. Create an array named products containing at least three product objects. Each 
// product object should include a name, price, and inventory details.
// 3. Implement a function named changeColor that takes a product object and a new 
// color as input. This function should update the color property of the product and 
// adjust the price based on the new color (implement your own logic, e.g., increase by 
// 10% for red, decrease by 5% for blue).
