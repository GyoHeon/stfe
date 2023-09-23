import express from "express";

const PORT = 8080;
const HOST = "0.0.0.0";

const Users = [
  {
    id: 0,
    name: "John",
  },
  {
    id: 1,
    name: "Jane",
  },
];

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  console.log("Start:", req.method, req.url);
  next();

  const diffTime = Date.now() - start;
  console.log(`End: Request took ${diffTime}ms`);
});

app.get("/users", (req, res) => {
  res.send(Users);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
