const socket = io("http://localhost:4000", {
  autoConnect: false,
});

socket.onAny((event, ...args) => {
  console.log(event, args);
});

const messageBody = document.getElementById("chat-body");
const messageForm = document.getElementById("form-message");
const messageInput = document.getElementById("message");
const messageContainer = document.getElementById("messages");
const myName = document.getElementById("my-name");
const usersName = document.getElementById("users-name");

// login
const enterForm = document.getElementById("form-room");
enterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = enterForm.getElementsById("username");
  const value = nameInput.value.toLowerCase().trim();
  createSession(value);

  nameInput.value = "";
});

const createSession = async (name) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: name }),
  };
  const res = await fetch("/session", options);
  const data = await res.json();

  socketConnect(data.username, data.userID);

  localStorage.setItem("session-username", data.username);
  localStorage.setItem("session-userID", data.userID);

  enterForm.style.display = "none";
  messageBody.style.display = "flex";
  myName.innerHTML = `My name: ${data.username}`;
};

const socketConnect = async (username, userID) => {
  socket.auth = { username, userID };

  await socket.connect();
};
