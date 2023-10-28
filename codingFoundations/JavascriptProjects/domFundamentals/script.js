console.log("Hello, DOM!");

console.log(document);

// Finds the first HTML element with the ID ="listTitle" attribute
let listTitle = document.getElementById("listTitle");
console.log(listTitle);

listTitle.textcontent = "Willie's Magical To-Do List";
listTitle.style.textAlign = "center";

document.getElementById("listTitle").addEventListener("click", (event) => {
    listTitle = event.target;

    if(listTitle.dataset.theme !== "hidden") {
        listTitle.textContent = "Willie's To-Do List";
        listTitle.style.color = "darkblue";
        listTitle.dataset.theme = "hidden";
    } else {
        listTitle.textContent= "Newt's To-Do List";
        listTitle.style.color = "purple";
        listTitle.dataset.theme = "revealed";
    }
}) 


let inputField = document.getElementById("listInput");
inputfield.parentElement.style.textAlign = "center";

// Find the first element with the selector "ul li"
// First li element inside the first ul element.
let firstListItem = document.querySelector("ul li");
console.log(firstListItem);

// Access multiple elements
// querySelectorAll = return a Nodelist
let selectAll = document.querySelectorAll("ul li");
console.log(selectAll);



// getElementsByClassName
let groceryItems = document.getElementsByClassName("groceryItem");
console.log(groceryItems);
console.log(groceryItems[2]);
console.log(groceryItems instanceof Array);
console.log(groceryItems.item(2));

let liElement = document.getElementsByTagName("li");
console.log(liElement);

//Acess the childnodes of the body 
console.log(document.body.childNodes);
console.log(document.body.childNodes.item(1));

let listDiv = document.getElementById('list');

console.log(listDiv.firstChild);
console.log(listDiv.firstChild.nextSibling);
console.log(listDiv.firstChild.nextSibling.nextSibling);

console.log(listDiv.firstElementChild);
console.log(listDiv.firstElementChild.nextElementSibling);
console.log(listDiv.firstElementChild.nextElementSibling.nextElementSibling);

for (const element of ulLiElement) {
    element.style.fontFamily = "Cursive";
    element.style.color = "indigo";
}

let lastGrocery = document.getElementsByClassName("groceryItem")[0];
lastGrocery.innerText = "Moondew Drops"

document.getElementsByClassName("listItem")[4].innerHTML = "Buy a new cauldron";

selectAll = document.querySelectorAll("ul li");
for (const item of selectAll){

    item.addEventListener("dbclick", (event) => { 
        item.remove();
    })

item.addEventListener("click", (event) => {
    let listItem = event.target;

    if (listItem.dataset.theme !== "completed") {
        listItem.style.textDecoration = "line-through";
        listItem.dataset.theme = "completed";

    } else {
        listItem.style.textDecoration = "none";
        listItem.dataset.theme = "stillToDo";
    }
 })
}

item.addEventListener("click", (event) => {
    let clickMe = event.target;

})

