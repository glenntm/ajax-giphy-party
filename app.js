//const { default: axios } = require("axios");
const clickme = document.querySelector('#getGiph');
const search = document.querySelector("#searchGiph");
const body = document.querySelector('body');
console.log("Let's get this party started!");

async function getGiph(){
    let res = await axios.get(`https://api.giphy.com/v1/gifs/random?tag=${search.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let img = document.createElement("img");
    img.setAttribute('src', res.data.data.images.original.url);
    console.log(res.data.data.images.preview.mp4);
    body.appendChild(img);
}

clickme.addEventListener("click", function(e) {
    e.preventDefault();
    getGiph();

    console.log(search.value);

    search.value = '';
})