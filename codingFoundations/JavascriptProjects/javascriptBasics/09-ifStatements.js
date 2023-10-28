// if (booleanCondition) {
    //Do something here
// }

if (10 > 5) {
    console.log("Of course, 10 is greater than 5!");
}

let isOn = true;
let isRunning = false;

if (isOn === true) {
    console.log("This device is on right now.");
}

if (isOn && isRunning) {
    console.log("The device is still on and running!");
    isOn = false
}

if (isOn || isRunning) {
    console.log("The device is on or it is running");
}

if (!isOn) { //isOn === false then that is true
    console.log("Clearly someone turned the device off.");
}

let weatherCondition = "sunny";
let temperature = "hot";

if (weatherCondition == "sunny" && temperature == "hot") {
    console.log("It is sunny and hot");
}

let ourNumber = 7;
if (ourNumber <= 5 || ourNumber > 10) {
    console.log("Number is less than or equal to 5 or greater than 10");
}

if (ourNumber) {
    console.log("Our number is: ", ourNumber)
}