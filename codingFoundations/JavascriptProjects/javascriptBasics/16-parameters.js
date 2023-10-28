// Parameters are placeholders for data we will pass into a function 
// We "pass in" the parameters when we invoke (call) the function

// An example is the console.log(<parameters) 

//functionKeword methodName( parameters )
function greet(name) {
    console.log(`Hello, ${name}`);
}

// Arguments (vs parameters)
/*greet("Charlie");

function add(num1, num2) {
    console.log(num1);
    console.log(num2);
    let sum = num1 + num2;
    console.log(sum);
}

add(38,4) // will produce 42
add(86) // will prodcue NaN as a result since no second argument is provided
add(10, "Five"); // output = 10Five
add(10, "5") // output = 105

let person1 = {
    firstName : "Marty",
    lastName : "Flaherty"
};

let person2 = {
    firstName : "Terry",
    lastName : "Matilick"
};

let greetPerson = (person) => {
    let fullName = `${person.firstName}` + " " + `${person.lastName}`;  // get the full name
    let greeting = ` Hi there, ${fullName} `;
    console.log(greeting)//log to the console
}
greetPerson(person1);
greetPerson(person2);
*/
let subtractTwoNumber = (firstNum, secondNum) => {
    let sum = firstNum - secondNum;
    console.log(`${firstNum} - ${secondNum} = ${sum}`)
}

subtractTwoNumber(5,7)
subtractTwoNumber(10,5)

let multiplyTwoNumber = (firstNum, secondNum) => {
    let sum = firstNum * secondNum;
    console.log(`${firstNum} * ${secondNum} = ${sum}`)
}

multiplyTwoNumber(10,5)
multiplyTwoNumber(5,7)

let addTwoNumbers = (firstNum, secondNum) => {
    let sum = firstNum + secondNum;
    console.log(`${firstNum} + ${secondNum} = ${sum}`)
}

addTwoNumbers(22, 22)

let divideTwoNumbers = (firstNum, secondNum) => {
    let sum = firstNum / secondNum;
    console.log(`${firstNum} / ${secondNum} = ${sum}`)
}

divideTwoNumbers(10, 5)