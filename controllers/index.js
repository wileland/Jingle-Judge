const router = require("express").Router();
const viewRoutes = require("./viewRoutes"); // Import view routes
const apiRoutes = require('./api');

router.use("/", viewRoutes); // Use view routes
router.use('/api', apiRoutes);

module.exports = router;
