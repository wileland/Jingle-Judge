const express = require("express");
const router = express.Router();
const { Child } = require("../models");
const withAuth = require('../utils/auth');


// Root route that renders the home page
router.get("/", withAuth, (req, res) => {
  res.render("login", );
});

router.get('api/parent/child/:id', withAuth, async (req, res) => {
  try {
    const dbChildData = await Child.findByPk(req.params.id, {
      include: [
        {
          model: Action,
          attributes: [
            'id',
            'event',
            'category_id',
            'status'
          ],
        },
      ],
    });
    const child = dbChildData.get({plain:true});
    res.render('child', {child, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/api/parent', (req, res) => {
//   try {
    
//   } catch(err) {

//   }
// })

module.exports = router;
