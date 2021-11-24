const inputArea = document.querySelector(".input");
const outputArea = document.querySelector(".output");
const button = document.querySelector(".translateButton");

function makeHangulUgly(event) {
  event.preventDefault();
  const textInput = inputArea.value;
  printOutput(textInput);
}
function printOutput(text) {
  let textArr = text.split("");
  textArr = textArr.map(function (x) {
    if (x === " " || x === "," || x === ".") return x;
    else {
      return String.fromCharCode(parseInt(x.charCodeAt(x) + 1));
    }
  });
  textArr = textArr.join("");
  outputArea.innerText = textArr;
}

button.addEventListener("click", makeHangulUgly);
