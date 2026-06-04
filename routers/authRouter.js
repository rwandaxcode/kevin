const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ message: "Account created successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "Incorrect password" });
    }

    req.session.user = user;

    res.json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
});

module.exports = router;
