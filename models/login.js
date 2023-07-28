const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  });
  
  const Login = mongoose.model('Login', loginSchema);
  
  module.exports = Login;