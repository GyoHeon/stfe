import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";

import "./config/passport.js";
import User from "./models/users.model.js";

dotenv.config({ path: "../.env" });

const app = express();
const server = createServer(app);

const PUBLIC_PATH = "../public";
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, PUBLIC_PATH)));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`✅ Server Start PORT : ${PORT}`);
});
