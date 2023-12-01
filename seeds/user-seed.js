const { User } = require('../models');

const userData = [{
        username: 'MaryJane',
        password: 'MowiWowi'
     },

     {
        username: 'MichaelMeyers',
        password: 'Halloween'
     }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;