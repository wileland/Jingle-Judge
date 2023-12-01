const { Action } = require('../models');

const actionTable = [{
        event: 'Take out the trash',
        category_id: 1,
        value: 1
    },

    {
        event: 'Do dishes',
        category_id: 1,
        value: 1
    },

    {
        event: 'Sweep and mop the floor',
        category_id: 1,
        value: 2
    },

    {
        event: 'cure cancer',
        category_id: 1,
        value: 20
    },

    {
        event: 'save the world',
        category_id: 1,
        value: 999
    },

    {
        event: 'Talk back',
        category_id: 2,
        value: -1
    },

    {
        event: 'Bully your sibling',
        category_id: 2,
        value: -2
    },

    {
        event: 'Draw on the wall',
        category_id: 2,
        value: -1
    },

    {
        event: 'Start a war',
        category_id: 2,
        value: -20
    },

    {
        event: 'Destroy the world',
        category_id: 2,
        value: -999
    },
];

const seedAction = () => Action.bulkCreate(actionTable);

module.exports = seedAction;
