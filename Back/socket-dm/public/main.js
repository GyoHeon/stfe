const socket = io("http://localhost:4000", {
  autoConnect: false,
});

socket.onAny((event, ...args) => {
  console.log(event, args);
});

const messageContainer = document.getElementById("messages");
messageContainer.style.display = "flex";
messageContainer.style.flexDirection = "column";

// login
const enterForm = document.getElementById("form-room");
enterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = enterForm.querySelector("#username");
  const value = nameInput.value.toLowerCase().trim();
  createSession(value);

  nameInput.value = "";
});

const messageBody = document.getElementById("chat-body");
const myName = document.getElementById("my-name");
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

const usersName = document.getElementById("users-name");
const chatPerson = document.getElementById("chat-person");
const setActiveUser = (username, userID) => {
  usersName.childNodes.forEach((user) => {
    if (user.dataset.userid === userID) {
      user.classList.add("active");
    } else {
      user.classList.remove("active");
    }
  });

  chatPerson.innerHTML = `대화 상대: <h3>${username}</h3>`;
  chatPerson.dataset.userid = userID;
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

const appendMessage = ({ message, time, background, position }) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.style.background = background;
  messageElement.style.float = position;
  messageElement.innerHTML = `<p>${message}</p><span>${time}</span>`;

  messageContainer.insertAdjacentElement("beforeend", messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
};

const messageForm = document.getElementById("form-message");
const messageInput = document.getElementById("message");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const receiver = chatPerson.dataset.userid;
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // make message payload
  const payload = {
    from: socket.id,
    to: receiver,
    message: messageInput.value,
    time,
  };

  socket.emit("message-to-server", payload);

  appendMessage({ ...payload, background: "blue", position: "right" });

  messageInput.value = "";
  messageInput.focus();
});

socket.on("message-to-client", ({ from, message, time }) => {
  const receiver = chatPerson.dataset.userid;
  if (receiver === null) {
    return;
  } else if (receiver === from) {
    appendMessage({ message, time, background: "green", position: "left" });
  }
});

socket.on("user-away", (id) => {
  const to = chatPerson.dataset.userid;
  if (id === to) {
    chatPerson.innerHTML = `대화 상대: <h3>없음</h3>`;
    messageContainer.style.display = "none";
  }
});

socket.on("stored-messages", ({ messages }) => {
  if (messages.length > 0) {
    messages.forEach((message) => {
      const payload = { ...message };

      if (message.from === socket.id) {
        appendMessage({ ...payload, background: "blue", position: "right" });
      } else {
        appendMessage({ ...payload, background: "green", position: "left" });
      }
    });
  }
});
