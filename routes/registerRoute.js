const express = require('express');
const router = express.Router();
const User = require('../models/register');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");


router.post('/register',
  body('username').isLength({ min: 3, max: 20 }),
  body('phoneNumber').isLength({ min: 10, max: 10 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }
  ), (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      bcrypt.hash(req.body.password, 10 )
      .then((hashedPassword) => {
        const newUser = new User({
          username: req.body.username,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          password: hashedPassword,
        });

        newUser.save()
        .then((result) => {
          res.status(201).send({
            message: `${req.body.username} Registered Successfully`,
            result,
          });
        })
        .catch((err) => {
          console.error('Error saving user:', err);
          res.status(500).send('Error registering user, please enter a valid email',err);
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error registering user", err
        });
      });
    } else {
      res.status(422).json({ errors: result.array() });
    }

  });

module.exports = router;