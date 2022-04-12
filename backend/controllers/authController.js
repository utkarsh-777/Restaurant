import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { keys } from "../keys.js";

const signup = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "Please fill out all the fields!" });
  }

  const user = await User.findOne({ username: username });

  if (user) {
    return res.json({ error: "User aleready exists!" });
  }

  bcrypt.hash(password, 12).then(async (hashedpassword) => {
    const newuser = new User({
      username,
      password: hashedpassword,
      isAdmin,
    });

    try {
      let save = await newuser.save();
      console.log(save);
      return res.json({ message: "Saved successfully!" });
    } catch (error) {
      return res.json({
        message: "Error!",
      });
    }
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ error: "Please provide all credentials!" });
  }

  const user = await User.findOne({ username: username });

  if (!user) {
    return res.json({ error: "Invalid email or password!" });
  }

  await bcrypt
    .compare(password, user.password)
    .then((match) => {
      if (match) {
        const token = jwt.sign({ _id: user._id }, keys.SECRET);
        const { _id, username, isAdmin } = user;
        return res.json({
          token,
          user: { _id, username, isAdmin },
        });
      } else {
        return res.json({ message: "Email and Password does not match!" });
      }
    })
    .catch((err) => console.log(err));
};

const resetPassword = async (req, res) => {
  crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      return console.log(err);
    }

    const token = buffer.toString("hex");
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(422).json({
        message: "User does not exists!",
      });
    }

    user.resetToken = token;
    user.expireToken = Date.now() + 3600000;

    try {
      let save = await user.save();
      console.log(save);

    } catch (error) {
      return res.json({
        error: "Server Error!",
      });
    }
  });
};

const newPassword = async (req, res) => {
  const newPassword = req.body.password;
  const senttoken = req.body.token;

  const user = await User.findOne({
    resetToken: senttoken,
    expireToken: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(422).json({
      error: "Session Expired!",
    });
  } else {
    bcrypt.hash(newPassword, 12).then(async (hashedpassword) => {
      user.password = hashedpassword;
      user.resetToken = undefined;
      user.expireToken = undefined;

      try {
        let save = await user.save();
        console.log(save);
        return res.json({
          message: "Sucessfully Updated!",
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server Error!",
        });
      }
    });
  }
};

export const authController = {
  signup,
  login,
  resetPassword,
  newPassword,
};
