const router = require('express').Router();

// Import all other routers
const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes'); // If you have routes for server-rendered views
const userRoutes = require('./api/userRoutes'); // Assuming you have user routes inside the api folder

// Establish the base routes
router.use('/api', apiRoutes);
router.use('/', viewRoutes);
router.use('/api/users', userRoutes);

// Export the base router
module.exports = router;
