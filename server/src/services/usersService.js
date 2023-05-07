const bcryptjs = require('bcryptjs');
const { User } = require('../models/Users');

const saveUser = async ({
  name, email, password
}) => {
  const type = 'user';
  const user = new User({
    name,
    email,
    type,
    password: await bcryptjs.hash(password, 10),
    created_date: new Date().toISOString(),
  });
  const asyncSave = await user.save();
  return asyncSave;
};

module.exports = {
  saveUser,
};
