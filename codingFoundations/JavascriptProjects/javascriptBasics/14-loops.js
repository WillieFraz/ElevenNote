// Loops allow us to repeat code while a given condition is ture

// For Loop --> Loops for  a given amount
/*
for (Initial Expression); (conditional Expression); ([Increment Expression]) {
    for loop body (code to be executed each loop)
}
*/
/*
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

let student = {
    name: "Sam",
    workExperience : "At least 1 week",
    hasCameraOn : false,
    isHandsom: true,
    isAwesome : true,
    employer : "None at this time"
}
//in = index (or number)
for (key in student) {
    if(key == "workExperience") continue;
    console.log("Key: ", key);
    console.log("Value: ", student[key]);
}
//of = value (or string)
let pets = ["Maggie", "Tigger", "Fang", "Anna", "Winston", "Princess", "Goofy", "Rose", "Dunno"];

for (const pet of pets) {
    console.log(pet[pets]);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz"
for (const letter of alphabet) {
    console.log(letter);
}

let countDown = 20;

while (countDown > 0) {
    console.log("tick", countDown);
    countDown--;
}
console.log("Boom!")
*/
/*for (i = 0; i <= 50; i += 5) {
    console.log(i);
}


for (i= 20; i >= 1; --i){
    console.log(i);
}

for (i = 3; i <= 30; i += 5){
    console.log(i);
}
*/
for (i = 25; i <= 200; i += 25){
    console.log(i);
}

for (i = 6; i <= 10; i += 2){
    console.log(i)
}

for (i = 100; i >= 10; i -= 5){
    console.log(i);
}