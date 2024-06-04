//  Question 1
//  Create an array named fruits that contains the following string
//  elements: "apple", "banana", "mango", "orange".
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
// output [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//**************************************************************** */
//  Question 2
//  Declare an array named numbers that can contain only number
//  elements and initialize it with the values 10, 20, 30, and 40.

let numbers: number[] = [10, 20, 30, 40];
console.log(numbers);
//output    [ 10, 20, 30, 40 ]

//***************************************************************** */
//  Question 3
//  Access the third element of the fruits array and assign it to a
//  variable named thirdFruit.

let fruits1: string[] = ["Apple", "Banana", "Mango", "Orange"];
fruits1[2] = "thirdFruit";
console.log(fruits1);
//output        [ 'Apple', 'Banana', 'thirdFruit', 'Orange' ]

//********************************************************** */
//  Question 4
//  Change the second element of the numbers array to 25.
//  let number:number[] = [10, 20, 30, 40]
//  console.log(number)

let number: number[] = [10, 20, 30, 40];
number[1] = 25;
console.log(number);
//output     [ 10, 25, 30, 40 ]

//*************************************************** */
//  Question 5
//  Add the element "grape" to the end of the fruits array using the
//  method.

let fruit2: string[] = ["Apple", "Banana", "Mango", "Orange"];
fruit2.push("Grapes");
console.log(fruit2);
//output    [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes']

//****************************************************** */
//  Question 6
//  Remove the last element from the fruits array using the
//  method and assign it to a variable named lastFruit.
let fruits3: string[] = ["Apple", "Banana", "Mango", "Orange"];
fruits3[3] = "lastFruit";
console.log(fruits3);
//output        [ 'Apple', 'Banana', 'Mango', 'lastFruit' ]

//********************************************************** */
//  Question 7
//  Remove the first element from the fruits array using the
//  method and assign it to a variable named firstFruit.
let fruits4: string[] = ["Apple", "Banana", "Mango", "Orange"];
fruits4[0] = "firstFruit";
console.log(fruits4);
//output        [ 'Apple', 'Banana', 'Mango', 'lastFruit' ]

//********************************************************* */
//  Question 8
//  Add the element "kiwi" to the beginning of the fruits array
//  using the method.
let fruits5: string[] = ["Apple", "Banana", "Mango", "Orange"];
fruits5.unshift("kiwi");
console.log(fruits5);
//output        [ 'kiwi', 'Apple', 'Banana', 'Mango', 'Orange' ]

//*********************************************************** */
//  Question 9
//  Remove 2 elements from the fruits array starting from index 1
//  using the method.
let fruits6: string[] = ["Apple", "Banana", "Mango", "Orange"];
fruits6.splice(1, 2);
console.log(fruits6);
//output        [ 'Apple', 'Orange' ]

//********************************************************** */
//  Question 10
//  Insert the elements "pineapple" and "pear" at index 2 of the
//  fruits array using the method.
let fruits7: string[] = ["Apple", "Banana", "Mango", "Orange"];
fruits7.splice(2, 0, "Pineapple", "Pear");
console.log(fruits7);
//output        [ 'Apple', 'Banana', 'Pineapple', 'Pear', 'Mango', 'Orange' ]

//******************************************************** */
//  Question 11
//  Create a new array named citrusFruits that contains the first
//  two elements of the fruits array using the method.
let fruits8: string[] = ["Apple", "Banana", "Mango", "Orange"];
let citrusFruits: String[] = fruits8.splice(0, 2);
console.log(citrusFruits);
//output        [ 'Apple', 'Banana' ]

//********************************************************** */
//  Question 12
//  Create a new array named lastTwoFruits that contains the last
//  two elements of the fruits array using the method.
let fruits9: string[] = ["Apple", "Banana", "Mango", "Orange"];
let lastFruits: String[] = fruits9.splice(2, 3);
console.log(lastFruits);
// output       [ 'Mango', 'Orange' ]
