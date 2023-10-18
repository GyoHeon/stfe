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

  const nameInput = enterForm.querySelector("#username");
  const value = nameInput.value.toLowerCase().trim();
  createSession(value);

  nameInput.value = "";
});

const styleTrans = (name) => {
  enterForm.style.display = "none";
  messageBody.style.display = "flex";
  myName.innerHTML = `My name: ${name}`;
};

const createSession = async (username) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  };

  const res = await fetch("/session", options);

  const data = await res.json();

  socketConnect(data.username, data.userID);

  localStorage.setItem("session-username", data.username);
  localStorage.setItem("session-userID", data.userID);

  styleTrans(data.username);
};

const socketConnect = async (username, userID) => {
  socket.auth = { username, userID };

  await socket.connect();
};

socket.on("users-data", ({ users }) => {
  usersName.innerHTML = "";

  users.forEach((user) => {
    if (user.userID !== localStorage.getItem("session-userID")) {
      const userElement = `<li>${user.username}</li>`;
      usersName.insertAdjacentHTML("beforeend", userElement);
    }
  });
});

const sessionUsername = localStorage.getItem("session-username");
const sessionUserID = localStorage.getItem("session-userID");

if (sessionUsername && sessionUserID) {
  socketConnect(sessionUsername, sessionUserID);

  styleTrans(sessionUsername);
}
