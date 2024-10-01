const foodModel = require("../models/foodModel");

//add foodItem

const addFood = async (req, res) => {
  const { productName, description, productCategory, productPrice } = req.body;
  // console.log(productName, description, productCategory, productPrice);
  try {
    const newItem = new foodModel({
      productName: productName,
      description: description,
      productCategory: productCategory,
      productPrice: productPrice,
    });
    await newItem.save();
    res.status(201).json({ message: "New Item added" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = addFood;
