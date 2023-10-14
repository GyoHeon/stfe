import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("socket id:", socket.id);

  socket.on("join", (message) => {
    console.log("join", { message });
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
