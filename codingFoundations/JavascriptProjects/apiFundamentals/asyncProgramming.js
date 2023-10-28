function getData () {
    // setTimeout(handlerFunction, timeout in MS
    //setTime(() => {return "Some data";}, 3000);
    console.log("Start getData timeout");
    setTimeout(() => {
        return "Some data";
     }, 3000);
    }

    // A callback function is a function that gets executed at the end/ conclusion of an async function/process

function getDataCallback(callback) {
    setTimeout(() => {
        callback("some callback data");
    }, 3000);
    console.log("End getDataCallback");
}

let callbackFunction = (data) => {
    console.log("callback", data);
}

getDataCallback(callbackFunction);

  let data = getData();
  console.log("data", data);

  function getDataPromise(shouldResolve) {
    //Declare a promise
    // A promise is an object that may produce a value in the future
    // pening, fufilled rejected - promise states

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) { //normally some sort evaluation 
                resolve("Some promise data");
            } else {
                reject("Error because it was rejected");
            }
        }, 5000)
    })
  }

  let promise = getDataPromise(false);
  console.log(promise);

promise
    // .then is a promise resolver, it fulfills the promise
    .then(data => console.log("promise resolver: ", data))
    // catches any and error and handles nicely
    .catch(error => console.log("Ooops! That didn't work", error));

    async function fn() {
        return "Hello";
    }

    console.log(fn()); // could not use toUppercase() because it cannot work on a promise

    fn().then(data => console.log("Resolved async function", data.toUpperCase));