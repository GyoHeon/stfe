import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";
import { generateMessage } from "./utils/message";
import { addUser, getUsersInRoom } from "./utils/users";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("socket id:", socket.id);

  socket.on("join", (options, callback) => {
    const { error, user } = addUser({ id: socket.id, ...options });

    if (error) {
      return callback(error);
    } else {
      socket.join(user.room);
    }

    socket.emit(
      "message",
      generateMessage("Admin", `Welcome, this room is ${user.room}`)
    );
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        generateMessage("", `New user ${user.username} has joined!`)
      );

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
  });

  socket.on("sendMessage", (message) => {
    console.log("sendMessage", { message });
  });

  socket.on("disconnect", (message) => {
    console.log("disconnect", { message });
  });
});

const PORT = 4000;

const PUBLIC_PATH = "../public";
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, PUBLIC_PATH)));

server.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
