const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  orderItems: Array,
  loginCustomerId: String,
});

const FoodOrders = mongoose.model("orders", OrdersSchema);

module.exports = FoodOrders;
