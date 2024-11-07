const mongoose = require("mongoose");

const AddCartSchema = new mongoose.Schema({
  menuId: String,
  name: String,
  description: String,
  price: Number,
  category: String,
  ingredient: String,
  isVegitarian: String,
  isSeasonal: String,
  file: String,
  ownerId: String,
  restaurantId: String,
  loginCustomerId: String,
  quantity: Number,
  Status: String,
  availabilty: String,
  rating: String,
});

const AddCartMenuItems = mongoose.model("AddCartMenu", AddCartSchema);

module.exports = AddCartMenuItems;
