const seedUser = require('./user-seed');
const seedCategory = require('./category-seed');
const seedAction = require('./action-seed');
const seedChild = require('./child-seeds')
const sequelize = require('../config/connection');
const seedAssignment = require('./assignment-seeds')

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedCategory();
    await seedAction();
    await seedChild();
    await seedAssignment();
    process.exit(0);
};

seedAll();