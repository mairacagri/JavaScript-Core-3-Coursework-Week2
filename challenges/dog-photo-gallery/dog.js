//- Add 2 `<button>` and 1 `<ul>` element,
// either in the HTML or through JavaScript
let content = document.querySelector("#content");
let buttonEl = document.createElement("button");
buttonEl.innerText = "press me"; 
content.appendChild(buttonEl);



//When the button is clicked it should make an API 
// call to `https://dog.ceo/api/breeds/image/random`

buttonEl.addEventListener( "click", function(){
    //make api call
    fetch("https://dog.ceo/api/breeds/image/random")
    .then (function (response){
        return response.json()
    })
    .then(function (data){
        //After receiving the data, 
        //append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
        let ulEl = document.createElement("ul");
        content.appendChild(ul)
        let imgEl = document.createElement("img");
        imgEl.src= data.message; //data is our obj.
        let liEl = document.createElement("li");
        liEl.appendChild(img);
        ulEl.appendChild(liEl);
    })
})