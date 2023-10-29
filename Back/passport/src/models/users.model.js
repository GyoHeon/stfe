import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const SALT_ROUNDS = 10;
userSchema.pre("save", function (next) {
  let user = this;

  // when password is modified
  if (user.isModified("password")) {
    // generate salt
    bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hashedPassword) {
        if (err) {
          return next(err);
        }
        user.password = hashedPassword;
        next();
      });
    });
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    // if err
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

const User = mongoose.model("user", userSchema);

export default User;
