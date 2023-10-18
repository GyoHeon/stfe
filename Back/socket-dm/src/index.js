import crypto from "crypto";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

dotenv.config({ path: "../.env" });

mongoose
  .connect(process.env.MONGO_ID)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const randomId = () => crypto.randomBytes(8).toString("hex");

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  const userID = socket.handshake.auth.userID;
  if (!(username && userID)) {
    return next(new Error("invalid user"));
  }

  socket.username = username;
  socket.id = userID;

  next();
});

const users = [];
io.on("connection", (socket) => {
  const userData = {
    username: socket.username,
    userID: socket.id,
  };
  users.push(userData);
  io.emit("users-data", { users });

  // message from client
  socket.on("message-to-server", (message) => {});

  // import message from database
  socket.on("fetch-message", (message) => {});

  // exit chat
  socket.on("disconnect", () => {});
});

const PORT = 4000;

const PUBLIC_PATH = "../public";
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, PUBLIC_PATH)));
app.use(express.json());
app.use(express.urlencoded());

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/session", (req, res) => {
  const data = {
    username: req.body.username,
    userID: randomId(),
  };

  res.send(data);
});
