const { Action } = require('../models');

const actionTable = [{
        event: 'Take out the trash',
        Category_id: '1',
        value: '1'
    },

    {
        event: 'Do dishes',
        Category_id: '1',
        value: '1'
    },

    {
        event: 'Sweep and mop the floor',
        Category_id: '1',
        value: '2'
    },

    {
        event: 'cure cancer',
        Category_id: '1',
        value: '20'
    },

    {
        event: 'save the world',
        Category_id: '1',
        value: '999'
    },

    {
        event: 'Talk back',
        Category_id: '2',
        value: '-1'
    },

    {
        event: 'Bully your sibling',
        Category_id: '2',
        value: '-2'
    },

    {
        event: 'Draw on the wall',
        Category_id: '2',
        value: '-1'
    },

    {
        event: 'Start a war',
        Category_id: '2',
        value: '-20'
    },

    {
        event: 'Destroy the world',
        Category_id: '2',
        value: '-999'
    },
];

const seedAction = () => Action.bulkCreate(actionTable);

module.exports = seedAction;
