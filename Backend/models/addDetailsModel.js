const mongoose = require("mongoose");

const RestroDeytailsSchema = new mongoose.Schema({
  name: String,
  description: String,
  cuisineType: String,
  openingHours: String,
  streetAddress: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  emailid: String,
  mobileno: Number,
  twitter: String,
  instagram: String,
  file: String,
  ownerId: String,
});

const RestroDetailsAdd = mongoose.model("addRestaurant", RestroDeytailsSchema);

module.exports = RestroDetailsAdd;
