const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const LoginUserlist = mongoose.model("User", UserSchema);

module.exports = LoginUserlist;
