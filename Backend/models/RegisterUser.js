const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  password: String,
  typeofUsers: String,
});

const RegisterUser = mongoose.model("RegisCustomer", UserSchema);

module.exports = RegisterUser;
