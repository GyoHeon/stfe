import express from "express";
import passport from "passport";

import User from "./models/users.model.js";

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  // make user object
  const user = new User(req.body);

  // save user
  try {
    await user.save();

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, err });
  }
});

userRouter.post("/login", async (req, res, next) => {
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

userRouter.post("/logout", (req, res) => {
  try {
    req.logOut();
  } catch (err) {
    next(err);
  }
  res.redirect("/login");
});

export default userRouter;
