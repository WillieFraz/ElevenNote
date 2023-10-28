const url = "https://raw.githubusercontent.com/ElevenfiftyAcademy/fetch-lesson/main/presidents.json";

function Header() {
let x = document.createElement("HEADER");
document.body.appendChild(x);

let doc = document.createElement("h2");
let t = document.createTextNode(
    "Presidents List");
    doc.appendChild(t);
    document.getElementById("head").appendChild(doc);
}


async function fetchPresidents() {
    // await is another promise resolver
    const response = await fetch(url);
    let data = await response.json();
  //  console.log(data);

 //   data.forEach((president, index) => {
//       console.log(`President #${index+1} is ${president.last}`)
//    });

    return data;
}

// Accomplish same thing as await just using .then
   /* fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
*/

async function run() {
    const presidents = await fetchPresidents();
    updateList(presidents);
   // let presidentByYear = getPresidentsByYear(1700, 1799, presidents);
   // console.log(presidentByYear);
}

function getPresidentsByYear(startYear, endYear, presidents) {
        return presidents.filter((president) => president.year >=
        startYear && president.year <= endYear);
}

function createPresident(parentDiv, presidentObj) {
    let div = document.createElement("div");
    div.innerText = `${presidentObj.year}: ${presidentObj.first} ${presidentObj.last}`;
    parentDiv.appendChild(div);    
}

function updateList(allPresidents) {
    let start = document.getElementById("startYear");  // input
    let end = document.getElementById("endYear");       //input
    let parentDiv = document.getElementById("presidents")  //div

    parentDiv.innerHTML = ""

    let startYear = start.value;
    let endYear = end.value;

    document.getElementById("presidentsTitle").innerText = `Presidents born between ${startYear} and ${endYear}:`
    let presidents = getPresidentsByYear(startYear, endYear, allPresidents);
    for (const pres of presidents) {
        createPresident(parentDiv, pres);
    }
}

    for(const pres of presidents) {
        i
    }


// Invoking a function, or runinng, or executing, or calling...
// let presidents = fetchPresidents();
// console.log(presidents);
// run();

let button = document.getElementById("update");
button.addEventListener("click", run);