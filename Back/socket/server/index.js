import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: "*" } });

const PORT = 8080;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

httpServer.listen(PORT, () => {
  console.log("Server running on port 8080");
});
