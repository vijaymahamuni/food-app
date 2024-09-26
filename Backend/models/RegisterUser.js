const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  phoneNum: String,
  password: String,
});

const RegisterUser = mongoose.model("register_users", UserSchema);

module.exports = RegisterUser;
