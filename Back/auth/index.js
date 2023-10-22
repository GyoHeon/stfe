import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());

const refreshTokens = [];

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  refreshTokens.push(refreshToken);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.json({ accessToken });
});

const posts = [
  { username: "Kyle", title: "Post 1" },
  { username: "lgh", title: "Post 2" },
];

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.warn(err);
    }
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get("/posts", authMiddleware, (req, res) => {
  res.json(posts);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
