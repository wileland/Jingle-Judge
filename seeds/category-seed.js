const { Category } = require('../models');

const categoryTable = [{
        id: 1,
        name: 'Nice'
    },

    {
        id: 2,
        name: 'Naughty'
    },
];

const seedCategory = () => Category.bulkCreate(categoryTable);

module.exports = seedCategory;