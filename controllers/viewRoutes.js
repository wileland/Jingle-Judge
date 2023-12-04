const express = require("express");
const path = require("path");
const router = express.Router();

// Example root route that renders a home page
router.get("/", (req, res) => {
  // If you're using a view engine like Handlebars, EJS, Pug, etc.
  res.render("home", { title: "Welcome to Krampus vs Santa!" });

  // If you're serving a static HTML file and not using a view engine:
  // res.sendFile(path.join(__dirname, '../public/home.html'));
});

// Example route for about page
router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });

  // For serving a static HTML file:
  // res.sendFile(path.join(__dirname, '../public/about.html'));
});

// Example route for contact page
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });

  // For serving a static HTML file:
  // res.sendFile(path.join(__dirname, '../public/contact.html'));
});

module.exports = router;
