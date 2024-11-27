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
