const router = require("express").Router();
const userRoutes = require("./userRoutes.js"); // Import view routes
const parentRoutes = require("./parentRoutes.js"); // Import parent routes

router.use("/users", userRoutes); // Use view routes
router.use("/parent", parentRoutes);

module.exports = router;