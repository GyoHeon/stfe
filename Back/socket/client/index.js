import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

console.log("Hello from the client");

const socket = io("ws://localhost:8080");

socket.on("message", (message) => {
  const liElement = document.createElement("li");
  liElement.innerText = message;
  document.querySelector("ul").appendChild(liElement);
});

document.querySelector("button").addEventListener("click", () => {
  const message = document.querySelector("input").value;
  console.log(message);
  socket.emit("message", message);
});
