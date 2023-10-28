let starWarsPeopleList = document.querySelector("ul")

fetch("https://swapi.dev/api/starships")
.then(function (response) {
    return response.json();
})
.then(function (json) {
    let starships = json.results;

    for (s of starships) {
        let listItem = document.createElement("li");
        listItem.innerText = s.name;
        starWarsPeopleList.appendChild(listItem);
    }
})
   