/*if (number < 5) {} else if (number > 5) else {};

if (condition) {
// code to be executed if condition1 is true

} else if (condition) {
//code to be executed if the condition1 is false and condition2 is true

} else {
    //code to be execudted if the condition  is false and condition2 is false
};

if (condition) {
    //block of code here
} else {
    if(condition) {
        //more code
    } else {
        //final code
    } 
   // block of code here
}*/


let temperature = 25;

if (temperature >= 100) {
    console.log("Stay inside.");
} else if (temperature > 84) {
    console.log("it is hot");
} else if (temperature >= 75) {
    console.log("it is warm");
} else if (temperature >= 65) {
    console.log("it is Ideal");
} else if (temperature >= 55) {
    console.log("it is chilly");
} else if (temperature > 30) {
    console.log("it is cold");
} else {
    console.log("Freezing");
};