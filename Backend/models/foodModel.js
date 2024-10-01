const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  productName: String,
  description: String,
  //   image: String,
  productCategory: String,
  productPrice: Number,
});

const foodModel = mongoose.model("foodAdmin", foodSchema);
module.exports = foodModel;
