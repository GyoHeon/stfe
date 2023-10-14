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

socket.on("message", (message) => {});

const sidebar = document.querySelector("#sidebar");

socket.on("roomData", ({ room, users }) => {
  const userList = users.map(({ username }) => `<li>${username}</li>`).join("");

  sidebar.innerHTML = `<h1>Room name: ${room}</h1>
  <div>
    <h2>Users</h2>
    <ul>
      ${userList}
    </ul>
  </div>`;
});
