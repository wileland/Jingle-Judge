const router = require('express').Router();
const { Child, Action, Category} = require('../../models');
const withAuth = require('../../utils/auth');

//------------------------------------------------------------ this route works no touchy
router.get('/', withAuth, async (req, res) => {
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
    console.log("get route for api/parent/");

    res.render('parent', {
        children,
        loggedIn: req.session.loggedIn,
    });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// -------------------------------------------------------------------- 

router.get('/child/:id', withAuth, async (req, res) => {
    try {
      const dbChildData = await Child.findByPk(req.params.id, {
        include: [
          {
            model: Action,
            attributes: [
              'id',
              'event',
              'category_id',
              'value',
            ],
          },
        ],
      });
      const actions = dbChildData.get({plain:true});
      console.log(actions)
      res.render('child', 
      {
        actions, 
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/', withAuth, (req, res) => {
    
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