////exercise using the javascript
//alert("Hello ji!")
//const a = prompt("ENter a value of z");
//alert(`a value is ${a}`);

const btn = document.querySelector(".btn");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/minion.json";



function requestUrl(input) {
    return `${serverUrl}?text=${input}`;
}

btn.addEventListener("click", function () {

    const input = textarea.value;
    // calling server for procesing

    fetch(requestUrl)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contains.translated;
            output.innerText = translatedText;
        })
        .catch()


// mock API call 
