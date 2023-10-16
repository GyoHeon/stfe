const socket = io("http://localhost:4000", {
  autoConnect: false,
});

socket.onAny((event, ...args) => {
  console.log(event, args);
});

const messageForm = document.getElementById("form-message");
const messageInput = document.getElementById("message");
const messageContainer = document.getElementById("messages");
const enterForm = document.getElementById("form-enter");
const myName = document.getElementById("my-name");
const usersName = document.getElementById("users-name");
