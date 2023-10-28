// Returning defines the output

/* let consoleReturnValue = console.log("Example");
console.log(consoleReturnValue);

let person1 = {
    firstName : "Marty",
    lastName : "Flaherty"
};

let person2 = {
    firstName : "Terry",
    lastName : "Mattick"
};

function getFullName(person) {
    let fullName = person.firstName + " " + person.lastName;
    // alternative let fullName = `${person.firstName} ${person.lastName}`;
    return fullName;
}

let fullName = getFullName(person1);
console.log(fullName);

// getFullName passes the returned value directly to the console.log()
console.log(getFullName(person2));

function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
    function subtract(num1, num2) {
        return num1 - num2;
    }
//below a block body arrow function (uses curly braces)
    let multip = (num1, num2) => {
        return num1 * num2;
    }

    // Concis body arrouw function (no curly braces)
    //concise body functions return  by default
    let divide = (num1, num2) => num1 / num2;

    let sum = add(5,7);
    console.log("Add",  sum);
    console.log("Subtract ", subtract(5,7));
    console.log("Multiply: ", multiply(5,7));
    console.log("Divide: ", (5,7));
*/
    //Constructor Functions
    //Typically we use Pascal naming for these funciton


    //"new up" an "Instance" offer soecific copd
//create 5 new people 
// create function find shortest name
// create function to find oldest person
//desplay results

    function Person(firstName,lastName, age) {
        this.firstName = firstName; //parameter for arguments
        this.lastName = lastName;
        this.age = age;
    }

    let person1 = new Person("Jake", "Bryant", 21);
    let person2 = new Person("Tom", "Allen", 26);
    let person3 = new Person("Grant", "Hill", 30);
    let person4 = new Person("Amy", "Marksman", 19);
    let person5 = new Person("Tony", "Allen", 45);

    let people = [person1, person2, person3, person4, person5]; 
    
    let getShortestName = (names) => {
        let shortestlength = 0;
        let shortestName;
        for (const name of names) {
            if (name.length < shortestlength) {
                shortestName = name[0].length+1;
                shortestlength = name.length;
            } else if (name.length === shortestlength){
                shortestName = [shortestName, name]. flat();
            }
        
        }
        return shortestName;
    }

    let getOldestAge = (age) => {
        let oldestAge = 0;
        for (const age of ages) {
            if( age > oldestAge) {
                oldestAge = age;
            } else if (age == oldestAge) {
                oldestAge = [oldestAge, age].flat();
            }
        }
        return oldestAge;
    }

    