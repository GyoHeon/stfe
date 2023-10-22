import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

const posts = [
  { username: "Kyle", title: "Post 1" },
  { username: "lgh", title: "Post 2" },
];

const authMiddleware = (req, res, next) => {};

app.get("/posts", authMiddleware, (req, res) => {
  res.json(posts);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
