const seedUser = require('./user-seed');
const seedCategory = require('./category-seed');
const seedAction = require('./action-seed');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedCategory();
    await seedAction();
    process.exit(0);
};

seedAll();