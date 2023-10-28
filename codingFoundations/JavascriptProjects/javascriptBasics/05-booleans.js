let x = true;
let y = false;

let numOne = 255;
let numTwo = 42;
let numThree = 86;
let numFive = "86";

console.log(numOne == numTwo);
console.log(numOne != numTwo);

let myPassword = "SomethingOriginal";
let inputPassword = "NothingOriginal";

console.log(numOne > numTwo);
console.log(numTwo <= numFour);
console.log(numThree == numFive); //true only checks value not type

console.log(numThree === numFive);// false checks value and type
console.log(numThree !== numFive); //true

let isAuthenticated = inputPassword == myPassword;
if (isAuthenticated) {};

let isGoodTemperature = true; //67 to 75
let isSunny = false;

// Logical operators - && and  || OR    !NOT
let isNiceDay = (isGoodTemperature )