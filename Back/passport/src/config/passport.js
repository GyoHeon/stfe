import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/users.model.js";

passport.use(
  new Strategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: "No user found" });
        }

        user.comparePassword(password, (err, isMatch) => {
          if (err) return done(err);

          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { message: "Invalid email or password" });
        });
      });
    }
  )
);
