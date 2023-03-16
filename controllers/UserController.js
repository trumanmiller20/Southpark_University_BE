const { User } = require('../../models');

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    throw err;
  }
};

const CreateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });
    res.send(user);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  GetAllUsers,
  CreateUser,
};