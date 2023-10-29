import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";

import "./config/passport.js";
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from "./middlewares/auth.js";
import User from "./models/users.model.js";

dotenv.config({ path: "../.env" });

const COOKIE_ENCRYPTION_KEY = ["key1", "key2"];

const app = express();
const server = createServer(app);

const PUBLIC_PATH = "../public";
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, PUBLIC_PATH)));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cookieSession({ keys: COOKIE_ENCRYPTION_KEY }));

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO_ID)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", checkAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, PUBLIC_PATH, "index.html"));
});

app.get("/signup", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, PUBLIC_PATH, "signup.html"));
});

app.post("/signup", async (req, res) => {
  // make user object
  const user = new User(req.body);

  // save user
  try {
    await user.save();

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ success: false, err });
  }
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, PUBLIC_PATH, "login.html"));
});

app.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ success: false, message: info });
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  })(req, res, next);
});

app.post("/logout", (req, res) => {
  try {
    req.logOut();
  } catch (err) {
    next(err);
  }
  res.redirect("/login");
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`✅ Server Start PORT : ${PORT}`);
});
