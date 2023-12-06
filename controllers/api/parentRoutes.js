const router = require('express').Router();
const { Child, Action, Category} = require('../../models');


router.get('/', async (req, res) => {
    try {
   const dbChildData = await Child.findAll({
        attributes: ['name', 'id', 'user_id', 'status'],
        include: [{
            model: Action,
            attributes: ['event']
        },
        ],
    })
    console.log(dbChildData);
    const children = dbChildData.map((child) => 
        child.get({plain:true})
    );
    console.log("children variable:", children);

    res.render('parent', {
        children,
        loggedIn: req.session.loggedIn,
    });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/child/:id', (req, res) => {
    Child.findOne({
            where: {
                id: req.params.id
            },
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
            .then(dbChildData => res.json(dbChildData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    });  

router.post('/', (req, res) => {
    
    Child.create({
        name: req.body.name
    })

    .then(dbChildData => {
        req.session.user_id = dbChildData.id;
        req.session.name = dbChildData.name;

        res.json(dbChildData);
    });
});


    module.exports = router;