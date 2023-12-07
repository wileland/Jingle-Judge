const { Child } = require('../models');

const childTable = [{
        id: 1,
        name: 'Tatum',
        status: 400,
        user_id: 1
    },

    {
        id: 2,
        name: 'Will',
        status: -6,
        user_id: 1
    },
    {
        id: 3,
        name: 'Anthony',
        status: 42,
        user_id: 1
    },
];

const seedChild = () => Child.bulkCreate(childTable);

module.exports = seedChild;