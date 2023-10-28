// Functions are reusable block of code
// The defined specific actions thats can be:"invoked"

//Paerenthesis incidicates it is a function

/*function hiMom() {
    console.log("Hello Mother");
}

hiMom();

let mummy = hiMom;
mummy ();

let petTheCat = function () {
    console.log("You pet the Kitty");
}
petTheCat();

// Functions Inside objects (methods)
let counter = {
    timesInvoked : 0,
    invoke : function() {
        console.log("You invoked the counter.invoke method.")
    }
}
*/
 //counter.invoke();
 //console.log(counter);

 let hero = {
    firtsName : "Chief",
    lastName : "Solo",
    getFullName : function () {
        console.log(`${hero.firtsName}, ${hero.lastName}`);
    }
 }

 hero.fullName();

 //Marty's way
 let student = {
    firtsName : "Sam",
    lastName : "Ruiz",
    getFullName : function() {
        let fullName = this.firtsName + " " + this.lastName
        console.log(fullName)
    }
 }

 student.getFullName();
 student.firtsName = "John Q.";
 student.lastName = "Public";
 student.getFullName();

 let pen = {
    color : "Blue",
    lengthIn : 7,
    isOpen : false,
    open : function() {
        this.isOpen = true;
    },
    close : function() {
        this.isOpen = false;
    },
    click : function() {
        this.isOpen = !this.isOpen;
    }
 }

 console.log(pen.isOpen);
 pen.click();
 console.log(pen.isOpen)

 // Arrow Functions
 let write = () => {
    console.log("You write something.");
 }
 write();

 pen.scribble = write;
 pen.scribble();