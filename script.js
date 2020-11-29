////exercise using the javascript
//alert("Hello ji!")
//const a = prompt("ENter a value of z");
//alert(`a value is ${a}`);

const btn = document.querySelector(".btn");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");

const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";



function requestUrl(input) {
    return `${serverUrl}?text=${input}`;
}

function errorHandler(error) {
    console.log(error)

}

function clickHandler() {

    const input = textarea.value;  //taking the input
    // calling server for procesing

    fetch(requestUrl(input))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)

};

btn.addEventListener("click", clickHandler)
// mock API call
