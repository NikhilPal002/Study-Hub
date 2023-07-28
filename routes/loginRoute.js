const express = require('express');
const router = express.Router();
const Login = require('../models/login');

router.post('/login', async (req, res) => {
      try {
        const user = await Login.findOne({ username: req.body.username, password: req.body.password });
        if (user) {
          res.json({ message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } catch (err) {
        res.status(500).json({ error: 'Error during login' });
      }
    // obj = {
    //     a: 'username',
    //     number: 24, 
    //     f : 'password',
    // }
    // res.json(obj);
});

module.exports = router;

