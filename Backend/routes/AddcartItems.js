const express = require("express");
const AddCartMenuItems = require("../models/cartItemsModel");
const AddcartItems = express.Router();
const auth = require("../middleware/auth");

AddcartItems.post("/addCartItem", async (req, res) => {
  const {
    _id,
    name,
    description,
    price,
    category,
    ingredient,
    isVegitarian,
    isSeasonal,
    file,
    ownerId,
    restaurantId,
  } = req.body.item;
  const CurrCustomer = req.body.CurrCustId;
  console.log(CurrCustomer);

  try {
    const AddMenu = new AddCartMenuItems({
      menuId: _id,
      name,
      description,
      price,
      category,
      ingredient,
      isVegitarian,
      isSeasonal,
      file: file,
      ownerId,
      restaurantId,
      loginCustomerId: CurrCustomer,
    });
    await AddMenu.save();
    res.status(200).json({ message: "Adding Cart Details successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//get CartData details for display by owner wise

AddcartItems.get("/cartData/:ownerId", auth, async (req, res) => {
  const id = req.params.ownerId;
  console.log(id);
  try {
    const getMenuList = await AddCartMenuItems.find({ loginCustomerId: id });
    console.log();
    res.json({ message: "Received List", data: getMenuList });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = AddcartItems;
