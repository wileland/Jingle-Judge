const express = require("express");
const router = express.Router();
const { Child } = require("../models");


// Root route that renders the home page
router.get("/", (req, res) => {
  res.render("home", { title: "Welcome to Krampus vs Santa!" });
});

router.get('/child/:id', async (req, res) => {
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

module.exports = router;
