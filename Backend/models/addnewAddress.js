const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  name: String,
  streetAddress: String,
  state: String,
  pincode: Number,
  city: String,
  loginUserid: String,
  addType: String,
  mobileno: Number,
});

const AddaddressModel = mongoose.model("addAddress", addressSchema);
module.exports = AddaddressModel;
