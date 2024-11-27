const express = require("express");
const AddnewRestro = express.Router();
const AddRestroData = require("../models/addDetailsModel");
const multer = require("multer");

// Multer storage config for Cloudinary
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "uploads", // Cloudinary folder name
//     allowed_formats: ["jpeg", "png", "jpg"],
//   },
// });
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

AddnewRestro.post(
  "/addrestaurant",
  upload.single("image"),
  async (req, res) => {
    // console.log(req.file.filename);
    const ImageFile = req.file.filename;
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
      ownerId,
      liked,
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
        file: ImageFile,
        ownerId,
        liked,
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
//get Restaurant list for Home page display restrolistout
AddnewRestro.get("/getRestroList", async (req, res) => {
  try {
    const getRestaurantList = await AddRestroData.find();
    res.json({ message: "Received List", data: getRestaurantList });
  } catch (error) {
    res.json({ message: error });
  }
});

//get Restaurant data for Restro Details Disply in Profile
AddnewRestro.get("/getRestrodata/:ownerId", async (req, res) => {
  const ownerId = req.params.ownerId;
  // console.log(ownerId);
  try {
    const getRestaurantList = await AddRestroData.find({ ownerId: ownerId });
    res.json({ message: "Received List", data: getRestaurantList });
  } catch (error) {
    res.json({ message: error });
  }
});

AddnewRestro.put("/updateFavt/:likedId", async (req, res) => {
  const likedId = req.params.likedId;
  const { likedStatus } = req.body;
  console.log(likedStatus);
  try {
    const updateFavt = await AddRestroData.findOneAndUpdate(
      {
        _id: likedId,
      },
      { $set: { liked: likedStatus } },
      { new: true }
    );
    res.json({ message: "Updated Successfully", data: updateFavt });
  } catch (error) {
    res.json({ message: error });
  }
});

AddnewRestro.post("/checkOwner", async (req, res) => {
  const ownerId = req.body.ownerId;

  try {
    // Check if userId exists
    const existingUser = await AddRestroData.findOne({ ownerId: ownerId });

    if (existingUser) {
      return res
        .status(201)
        .json({ message: "UserId already exists.", data: existingUser });
    } else {
      return res
        .status(200)
        .json({ message: "UserId available.", data: existingUser });
    }
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = AddnewRestro;
