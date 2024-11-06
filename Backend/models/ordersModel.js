const { array } = require("joi");
const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  quantity: Number,
  orderItems: Array,
  loginCustomerId: String,
});

const FoodOrders = mongoose.model("orders", OrdersSchema);

module.exports = FoodOrders;
