const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now }

});

const Register = mongoose.model('User', registerSchema);
module.exports = Register;
