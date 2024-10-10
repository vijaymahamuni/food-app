const express = require("express");
const AddnewRestro = express.Router();
const AddRestroData = require("../models/addDetailsModel");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
// Multer storage config for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder name
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

const upload = multer({ storage });
AddnewRestro.post(
  "/addrestaurant",
  upload.single("image"),
  async (req, res) => {
    const {
      name,
      description,
      cuisineType,
      openingHours,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      emailid,
      mobileno,
      twitter,
      instagram,
      file,
      ownerId,
    } = req.body;
    try {
      const AddnewRestro = new AddRestroData({
        name,
        description,
        cuisineType,
        openingHours,
        streetAddress,
        city,
        state,
        postalCode,
        country,
        emailid,
        mobileno,
        twitter,
        instagram,
        file,
        ownerId,
      });
      await AddnewRestro.save();
      res
        .status(200)
        .json({ message: "Adding Restaurant Details successfully" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);
AddnewRestro.get("/getRestroList", async (req, res) => {
  try {
    const getRestaurantList = await AddRestroData.find();
    res.json({ message: "Received List", data: getRestaurantList });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = AddnewRestro;
