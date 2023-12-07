const express = require("express");
const router = express.Router();
const { Child } = require("../models");
const withAuth = require('../utils/auth');


// Root route that renders the home page
router.get("/", withAuth, (req, res) => {
  res.render("login", );
});





module.exports = router;
