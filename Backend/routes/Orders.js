const express = require("express");
const orderItems = express.Router();
const OrderModel = require("../models/ordersModel");

//add order
orderItems.post("/OrderItems", async (req, res) => {
  //   console.log("orderItems Array:", req.body.cartItems);
  const loginCustomerId = req.body.ownerId;
  const orderItems = req.body.cartItems;
  //   console.log("orderItems", orderItems);
  try {
    const orderReq = new OrderModel({
      orderItems,
      loginCustomerId,
    });
    await orderReq.save();
    res.status(200).json({ message: "Your Order Successful" });
  } catch (error) {
    console.log(error);
  }
});

//get orderdata by USerwise
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

//get all orderdata
orderItems.get("/allOrdersdata", async (req, res) => {
  try {
    const getOrderList = await OrderModel.find();
    res.json({ message: "Received order List", data: getOrderList });
    // console.log(getAddreesList);
  } catch (error) {
    res.json({ message: error });
  }
});

//update status
orderItems.put("/updateStatus/:id", async (req, res) => {
  const sel_id = req.params.id;
  const { value, currentItemId } = req.body;
  try {
    const updatedOrder = await OrderModel.findOneAndUpdate(
      { _id: sel_id, "orderItems._id": currentItemId },
      { $set: { "orderItems.$.Status": value } },
      { new: true }
    );

    if (!updatedOrder) {
      console.log("Order or item not found");
      return null;
    }
    res.json({ message: "Received order List", data: updatedOrder });
  } catch (error) {
    res.json({ message: error });
  }
});
orderItems.delete("/delOrderCancel/:id", async (req, res) => {
  const cancelId = req.params.id;
  console.log("CancelId", cancelId);
  try {
    const canlOrderItem = await OrderModel.deleteOne({ _id: cancelId });
    res.json({ message: "Cancel Order Item Succesfully" });
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = orderItems;
