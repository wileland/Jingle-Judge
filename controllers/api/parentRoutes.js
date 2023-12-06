const router = require('express').Router();
const { Child, Action, Assignment} = require('../../models');

router.get('/', (req, res) => {
    Child.findAll({
        attributes: ['id', 'user_id', 'status'],
        include: [{
            model: Action,
            attributes: ['event']
        },
        {
            model: Category,
            attributes: ['name']
        }
    ]
    })
        .then(dbChild => res.json(dbChild))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});