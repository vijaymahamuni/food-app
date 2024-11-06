const express = require("express");
const AddnewMenu = express.Router();
const multer = require("multer");
const AddMenuItems = require("../models/menuModel");

// Set up Multer storage and file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); // Set file name as timestamp
  },
});

const upload = multer({ storage: storage });
AddnewMenu.post("/addItem", upload.single("image"), async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    ingredient,
    isVegitarian,
    isSeasonal,
    ownerId,
    restaurantId,
    quantity,
    Status,
    availabilty,
    rating,
  } = req.body;

  const ImageFile = req.file.filename;

  try {
    const AddMenu = new AddMenuItems({
      name,
      description,
      price,
      category,
      ingredient,
      isVegitarian,
      isSeasonal,
      file: ImageFile,
      ownerId,
      restaurantId,
      quantity,
      Status,
      availabilty,
      rating,
    });
    await AddMenu.save();
    res.status(200).json({ message: "Adding Menuitem Details successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
AddnewMenu.get("/getMenulist/:resId", async (req, res) => {
  const id = req.params.resId;
  try {
    const getMenuList = await AddMenuItems.find({ restaurantId: id });
    res.json({ message: "Received List", data: getMenuList });
  } catch (error) {
    res.json({ message: error });
  }
});
AddnewMenu.get("/AllMenulist/:ownerId", async (req, res) => {
  const id = req.params.ownerId;
  try {
    const getMenuList = await AddMenuItems.find({ ownerId: id });
    res.json({ message: "Received List", data: getMenuList });
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = AddnewMenu;
