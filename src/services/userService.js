const User = require("../models/User");

exports.getAllUsersService = async () => {
  return await User.find();
};

exports.blockUserService = async (id) => {
  const user = await User.findById(id);
  user.isBlocked = true;
  return await user.save();
};

exports.deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};