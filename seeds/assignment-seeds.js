const { Assignment } = require('../models');

const assignmentTable = [
    {
        id: 1,
        action_id: 1,
        child_id: 1
    },
    {
        id: 2,
        action_id: 4,
        child_id: 1
    },
    {
        id: 3,
        action_id: 2,
        child_id: 1
    },


];

const seedAssignment = () => Assignment.bulkCreate(assignmentTable);

module.exports = seedAssignment;