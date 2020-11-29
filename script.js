////exercise using the javascript
//alert("Hello ji!")
//const a = prompt("ENter a value of z");
//alert(`a value is ${a}`);

const btn = document.querySelector(".btn");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";



//function requestUrl(url) {
//    return `${url}?text=input`;
//}

btn.addEventListener("click", function () {

    const input = textarea.value;

    const requestUrl = `${url}?text=${input}`

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => output.innerText = data.contents.translated);


})


// mock API call 
