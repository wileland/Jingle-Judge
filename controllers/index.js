const router = require("express").Router();
const viewRoutes = require("./viewRoutes"); // Import view routes
const apiRoutes = require('./api');
const parentRoutes = require("./parentRoutes.js");

router.use("/", viewRoutes); // Use view routes
router.use('/api', apiRoutes);
router.use("/parent", parentRoutes);

module.exports = router;
