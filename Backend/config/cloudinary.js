const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: "dosppcotk",
  api_key: 663817597851284,
  api_secret: "IBdcoYadGBnmWhkkXbuu3VpogbQ",
});

module.exports = cloudinary;
