const express = require("express");
const multer = require("multer");
const addFood = require("../controllers/foodControler");

const foodRouter = express.Router();

// image Storage Engine
// const Storageimg = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `$Date.now()}${file.originalname}`);
//   },
// });
// const upload = multer({ storage: Storageimg });
// upload.single("image")

foodRouter.post("/add", addFood);

module.exports = foodRouter;
