import crypto from "crypto";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import path from "path";
import { Server } from "socket.io";
import { fetchMessages, saveMessages } from "./utils/messages.js";

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

let users = [];
io.on("connection", (socket) => {
  const userData = {
    username: socket.username,
    userID: socket.id,
  };

  const user = users.find(({ userID }) => userID === socket.id);

  if (user === undefined) {
    users.push(userData);
  }

  io.emit("users-data", { users });

  // message from client
  socket.on("message-to-server", (payload) => {
    io.to(payload.to).emit("message-to-client", payload);
    saveMessages(payload);
  });

  // exit chat
  socket.on("disconnect", () => {
    users = users.filter(({ userID }) => userID !== socket.id);

    io.emit("users-data", { users });

    io.emit("user-away", socket.id);
  });

  // import message from database
  socket.on("fetch-messages", ({ receiver }) => {
    fetchMessages(io, socket.id, receiver);
  });

  socket.on("stored-messages", ({ messages }) => {
    if (messages.length > 0) {
    }
  });
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
