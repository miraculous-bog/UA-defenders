const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, userJoiSchema } = require('../models/Users.js');
const { saveUser } = require('../services/usersService');
const { SUCCESS_REGISTRATION } = require('../helpers/constants');

const registerAuth = async (req, res, next) => {
  const {
    name, email, password, role,
  } = req.body;

  await userJoiSchema.validateAsync({
    name, email, password, role,
  });
  console.log(new Date());
  await saveUser({
    name, email, password, role
  });
  return res.status(200).json({ message: `${SUCCESS_REGISTRATION}` });
};

// const getUsers = async (req, res, next) => {
//   // const users = await User.aggregate([
//   //   {
//   //     '$limit': 2
//   //   }
//   // ]);

//   const users = await User.aggregate()
//     // .limit(1)
//     .count('users')

//   res.json(users);
// }

const loginAuth = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && await bcryptjs.compare(String(req.body.password), String(user.password))) {
    const payload = { email: user.email, name: user.name, userId: user._id };
    const jwtToken = jwt.sign(payload, 'secret-jwt-key');
    return res.json({ token: jwtToken });
  }
  return res.status(403).json({ message: 'Not authorized' });
};

module.exports = {
  registerAuth,
  loginAuth,
};
