const express = require("express");
const router = express.Router();

// Root route that renders the home page
router.get("/", (req, res) => {
  res.render("home", { title: "Welcome to Krampus vs Santa!" });
});

// Route for the about page
router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

// Route for the contact page
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

// 404 Error handling for unmatched routes
router.use((req, res) => {
  res.status(404).render("404", { title: "404: Page Not Found" });
});

module.exports = router;
