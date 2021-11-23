import { useState, useEffect } from 'react';

const inputArea = document.querySelector(".input");
const outputArea = document.querySelector(".output");
const button = document.querySelector(".translateButton");

const [output, setOutput] = useState('');


function makeHangulUgly(event) {
  event.preventDefault();
  const textInput = inputArea.value;
  printOutput(textInput);
}
function printOutput(text) {
  outputArea.innerText = text;
}
const convertText = (e) => {
        setOutput(
            uglifyText(
                input,
                10,
                10,
                10,
                10,
                1
            )
        );
    };
    const copyTo
button.addEventListener("click", makeHangulUgly);
