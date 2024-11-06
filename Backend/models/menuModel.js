const mongoose = require("mongoose");

const AddMenuSchema = new mongoose.Schema({
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
  quantity: Number,
  Status: String,
  availabilty: String,
  rating: String,
});

const AddMenuItems = mongoose.model("addMenu", AddMenuSchema);

module.exports = AddMenuItems;
