const express = require("express");
const router = express.Router();

// Root route that renders the home page
router.get("/", (req, res) => {
  res.render("home", { title: "Welcome to Krampus vs Santa!" });
});



module.exports = router;
