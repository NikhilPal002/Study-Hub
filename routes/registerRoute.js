const express = require('express');
const router = express.Router();
const User = require('../models/register');
const { body, validationResult } = require('express-validator');

router.get('/register', (req, res) => {
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send(req.body);
})

module.exports = router;