import express from "express";
import path from "path";

import {
  checkAuthenticated,
  checkNotAuthenticated,
} from "../middlewares/auth.js";

const mainRouter = express.Router();

const PUBLIC_PATH = "../public";
const __dirname = path.resolve();

mainRouter.get("/", checkAuthenticated, (req, res, next) => {
  res.sendFile(path.join(__dirname, PUBLIC_PATH, "index.html"));
});

mainRouter.get("/signup", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, PUBLIC_PATH, "signup.html"));
});

mainRouter.get("/login", checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, PUBLIC_PATH, "login.html"));
});

export default mainRouter;
