const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const router = express.Router();

// Middleware to check if the user is logged in
const redirectIfAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return res.redirect("/"); // Redirect to home if already logged in
  }
  next();
};

// Register a new user
router.post("/register", redirectIfAuthenticated, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user id in the session
    req.session.userId = newUser.id;

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

// Login user
router.post("/login", redirectIfAuthenticated, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Passwords match
      req.session.userId = user.id;
      res.json({ message: "Logged in successfully" });
    } else {
      // User not found or password does not match
      res.status(401).json({ error: "Incorrect email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
});

// Logout user
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/login");
  });
});

module.exports = router;
