const API = "B40kv5X5ETghfH1kgEAj1aKJJyda5ohP";
let searchQuery = "cat"
let url = `https://api.giphy.com/v1/gifs/random?&api_key=${API}&tag=${searchQuery}`
let counter = 0;
const btn = document.querySelector("#js-fetch");

const gifContainer = document.querySelector(".gif-container")

btn.addEventListener("click", function() {
    fetch(url)
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                throw new Error("There was connection error!")
            }
        })
        .then(resp => {
            let gif = document.createElement("img");
            let gifBox = document.querySelector("#js-gif")
            let gifUrl = resp.data.image_original_url;
            gif.setAttribute("id", "js-gif")
            if(counter === 0){
                gif.setAttribute("src", gifUrl);
                gifContainer.insertBefore(gif,btn)
            }else{
                gifBox.src = gifUrl;
            }
            counter++;

        })
        .catch(error => console.log("Error: ", error));
})