const router = require("express").Router();
const userRoutes = require("./userRoutes.js"); // Import view routes
 // Import parent routes

router.use("/users", userRoutes); // Use view routes


module.exports = router;