const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../../models");
const router = express.Router();
const withAuth = require('../../utils/auth');


// Register a new user
router.post("/", async (req, res) => {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
  
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData)
    })

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Login user
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res.status(400).json({message: 'incorrect username. Please try again.'});
      return;
    } else {
      // User not found or password does not match
      const validPassword = await dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({message: 'Incoreect password. Please try again!'})
        return;
      }
      
    }

    req.session.save(() => {
      req.session.loggedIn = true; 

      res.status(200).json({user: dbUserData, message: 'You are now logged in!'})
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout user
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;