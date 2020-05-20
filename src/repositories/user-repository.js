require('dotenv/config');
const User = require('../app/models/user');
const jwt = require('jsonwebtoken');

exports.login = async (email, password) => {
  const user = await User.findOne({email});

  if (!user) return null;

  const userModel = new User(user);

  if (!userModel.validateHash(password)) return null;

  const id = userModel._id;
  const token = jwt.sign({id}, process.env.SECRET, {expiresIn: 60});

  return token;
}

exports.create = async data => {
  const user = new User(data);

  user.password = user.generateHash(data.password);

  await user.save();
}