const express = require("express");
const router = express.Router();

// Root route for the home page
router.get("/", (req, res) => {
  res.render("home", {
    title: "Welcome to Jingle Judge: Naughty or Nice Edition!",
  });
});

// Login route for the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
  } else {
    res.render("login");
  }
});

module.exports = router;
