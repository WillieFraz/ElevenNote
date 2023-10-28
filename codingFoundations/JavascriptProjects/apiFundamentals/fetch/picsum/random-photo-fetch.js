let randomImage = document.querySelector(".random-image");
console.log("randomImage:", randomImage)

fetch("https://picsum.photos/500/300")
    .then(function (response) {
        console.log("Response:", response);
        if (!response.ok) {
            return new Error(response);
        }

        return response.blob();
    })
    .then(function (blob) {
        console.log("Blob:", blob)
        let objectUrl = URL.createObjectURL(blob);
        console.log("Object Url:", objectUrl);

        randomImage.src = objectUrl;
    })
    .catch(function(err) {
        console.log(err);
    });