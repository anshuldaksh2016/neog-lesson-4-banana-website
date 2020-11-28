////exercise using the javascript
//alert("Hello ji!")
//const a = prompt("ENter a value of z");
//alert(`a value is ${a}`);

const btn = document.querySelector(".btn");
const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");


btn.addEventListener("click", function () {
    let input = textarea.value;
    console.log("button clicked " + input);
    output.innerText = input;
})

