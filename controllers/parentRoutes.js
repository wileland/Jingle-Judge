const router = require('express').Router();
const { Child, Action, User} = require('../models');
const withAuth = require('../utils/auth');



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















router.post('/', withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id
      const newChild = await Child.create({
        user_id: userId,
        name: req.body.name
      });

      console.log('parent routes newChild ', newChild);

    res.status(200).json(newChild)
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});




router.get('/', withAuth, async (req, res) => {
  try {

    user_id = req.session.user_id
      const childData = await Child.findAll({
        where: {user_id}
      });
      const children = childData.map((child) => child.get({plain: true}))
      console.log(children)
      res.render('parent', {
          children,
          loggedIn: req.session.loggedIn,
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});












    module.exports = router;