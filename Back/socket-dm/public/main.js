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
const chatPerson = document.getElementById("chat-person");

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

const setActiveUser = (username, userID) => {
  usersName.childNodes.forEach((user) => {
    if (user.dataset.userid === userID) {
      user.classList.add("active");
    } else if (user.classList.contains("active")) {
      user.classList.remove("active");
    }
  });

  chatPerson.innerHTML = `대화 상대: <h3>${username}</h3>`;
  messageContainer.style.display = "flex";

  socket.emit("fetch-messages", { receiver: userID });
};

socket.on("users-data", ({ users }) => {
  usersName.innerHTML = "";

  users.forEach((user) => {
    if (user.userID !== localStorage.getItem("session-userID")) {
      const liElement = document.createElement("li");
      liElement.innerHTML = user.username;
      liElement.setAttribute("data-userid", user.userID);
      liElement.onclick = () => setActiveUser(user.username, user.userID);
      usersName.insertAdjacentElement("beforeend", liElement);
    }
  });
});

const sessionUsername = localStorage.getItem("session-username");
const sessionUserID = localStorage.getItem("session-userID");

if (sessionUsername && sessionUserID) {
  socketConnect(sessionUsername, sessionUserID);

  styleTrans(sessionUsername);
}
