const express = require('express');
const router = express.Router();
const User = require('../models/register');
const { body, validationResult } = require('express-validator');

router.post('/register',
  body('username').isLength({ min: 3, max: 20 }),
  body('phoneNumber').isLength({ min: 10, max: 10 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }
  ), (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      // Save the user to the database (assuming you have a User model defined)
      const newUser = new User({
        username: req.body.username,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save()
        .then(() => {
          res.send(`User ${req.body.username} registered successfully!`);
        })
        .catch((err) => {
          console.error('Error saving user:', err);
          res.status(500).send('Error registering user.');
        });
    } else {
      res.status(422).json({ errors: result.array() });
    }

  })

module.exports = router;