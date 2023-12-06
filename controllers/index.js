const express = require("express");
const router = express.Router();

// Import routes
const viewRoutes = require("./viewRoutes");
const userApiRoutes = require("./api/userRoutes");

// Register routes
router.use("/", viewRoutes);
router.use("/api/users", userApiRoutes);

module.exports = router;
