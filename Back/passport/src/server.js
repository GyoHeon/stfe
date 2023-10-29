import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";

import "./config/passport.js";
import mainRouter from "./routes/main.router.js";
import userRouter from "./routes/users.router.js";

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

app.use("/", mainRouter);
app.use("/auth", userRouter);

mongoose
  .connect(process.env.MONGO_ID)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`✅ Server Start PORT : ${PORT}`);
});
