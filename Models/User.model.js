const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String, 
    required: true, 
    lowercase: true, 
    max: 50, 
    unique: true
  }, 
  password: {
    type: String, 
    required: true,
    min: 3
  }, 
  name: {
    type: String, 
    default: "User"  
  }, 
  age: {
    type: Number, 
    default: null
  }
});

// Middleware to hash password before saving
UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Schema method for checking password 
UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
}

const User = mongoose.model('user', UserSchema);

module.exports = User;