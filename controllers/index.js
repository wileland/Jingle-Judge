const router = require("express").Router();

const viewRoutes = require("./viewRoutes"); // Import view routes
const apiRoutes = require("./api/userRoutes"); // Import user API routes

router.use("/", viewRoutes); // Use view routes
router.use("/api/users", apiRoutes); // Use user API routes

module.exports = router;
