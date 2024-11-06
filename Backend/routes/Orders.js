const express = require("express");
const orderItems = express.Router();
const OrderModel = require("../models/ordersModel");
orderItems.post("/OrderItems", async (req, res) => {
  //   console.log("orderItems Array:", req.body.cartItems);
  const loginCustomerId = req.body.ownerId;
  const orderItems = req.body.cartItems;
  //   console.log("orderItems", orderItems);
  try {
    const orderReq = new OrderModel({
      quantity: 1,
      orderItems,
      loginCustomerId,
    });
    await orderReq.save();
    res.status(200).json({ message: "Your Order Successful" });
  } catch (error) {
    console.log(error);
  }
});

orderItems.get("/getOrderdata/:ownerId", async (req, res) => {
  const id = req.params.ownerId;
  try {
    const getOrderList = await OrderModel.find({ loginCustomerId: id });
    res.json({ message: "Received order List", data: getOrderList });
    // console.log(getAddreesList);
  } catch (error) {
    res.json({ message: error });
  }
});

orderItems.get("/allOrdersdata", async (req, res) => {
  try {
    const getOrderList = await OrderModel.find();
    res.json({ message: "Received order List", data: getOrderList });
    // console.log(getAddreesList);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = orderItems;
