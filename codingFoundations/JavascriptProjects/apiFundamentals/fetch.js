// The fetch method requests resources from the network
// Fetch returns a promise that can be resolved to get the response

/* 
fetch("url")               // Returns a promise
    .then(response => ...) // Resolve the response
    .catch(error => ...)   // Catches the error if rejected
*/

fetch("https:google.com")       //fetches google.com
    // .then(response => console.log(response));
    .then(response => response.text())  //resolves the promise to a string
    .then(data => console.log(data));   // logs that resolved data

    const baseurl1 = "https://raw.githubusercontent.com/ElevenfiftyAcademy/fetch-lesson/main/";
    
    fetch(baseURL + "example.json")
        .then (response => response.json())
        .then(data => console.log(data));

    fetch(baseurl + "invalid.json")
        .then(response => response.json())
        .catch(error => console.log(error));