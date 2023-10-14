const socket = io();

const query = new URLSearchParams(window.location.search);
const username = query.get("username");
const room = query.get("room");

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});

const sidebar = document.querySelector("#sidebar");

socket.on("roomData", ({ room, users }) => {
  const userList = users.map(({ username }) => `<li>${username}</li>`).join("");

  const htmlRoomData = `<h1>Room name: ${room}</h1>
  <div>
    <h2>Users</h2>
    <ul>
      ${userList}
    </ul>
  </div>`;

  sidebar.innerHTML = htmlRoomData;
});

const chat = document.querySelector("#messages");

const scrollBottom = () => {
  chat.scrollTop = chat.scrollHeight;
};

socket.on("message", (message) => {
  const dateFormatted = new Intl.DateTimeFormat("ko-KR").format(
    message.createdAt
  );

  const isMine = message.username === username;

  const htmlWelcome = `<article class='chat-bubble ${isMine ? "my" : ""}'>
    <span>${message.username}</span>
    <span>${message.text}</span>
    <date>${dateFormatted}</date>
  </article>`;

  chat.insertAdjacentHTML("beforeend", htmlWelcome);

  scrollBottom();
});

const messageForm = document.querySelector("form#message");
const messageInput = messageForm.querySelector("input");
const messageButton = messageForm.querySelector("button");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  messageButton.setAttribute("disabled", "disabled");

  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) => {
    messageButton.removeAttribute("disabled");

    messageInput.value = "";
    messageInput.focus();

    if (error) {
      return alert(error);
    }
  });
});
