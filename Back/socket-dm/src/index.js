import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const users = [];
io.on("connection", (socket) => {
  const userData = {};
  users.push(userData);
  io.emit("users-data", {});

  // message from client
  socket.on("message-to-server", (message) => {});

  // import message from database
  socket.on("fetch-message", (message) => {});

  // exit chat
  socket.on("disconnect", () => {});
});

const PUBLIC_PATH = "../public";
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, PUBLIC_PATH)));
app.use(express.json());

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
