const { User } = require('../models');

const userData = [{
        username: 'MaryJane',
        email: 'maryjane@something.com',
        password: 'MowiWowi'
     },

     {
        username: 'MichaelMeyers',
        email: 'michaelmeyes@something.com',
        password: 'Halloween'
     }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;