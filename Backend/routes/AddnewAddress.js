const express = require("express");
const AddnewAddress = express.Router();
const AddaddressModel = require("../models/addnewAddress");

AddnewAddress.post("/addAddress", async (req, res) => {
  const {
    name,
    streetAddress,
    state,
    pincode,
    city,
    loginUserid,
    addType,
    mobileno,
  } = req.body;
  //   console.log("address", name, streetAddress, state, pincode, city);
  try {
    const addNew = new AddaddressModel({
      name,
      streetAddress,
      state,
      pincode,
      city,
      loginUserid,
      addType,
      mobileno,
    });

    await addNew.save();
    res
      .status(200)
      .json({ message: "Adding new Address details successfully" });
  } catch (error) {
    console.log(error);
  }
});
AddnewAddress.get("/getAddressDetails/:ownerId", async (req, res) => {
  const id = req.params.ownerId;

  try {
    const getAddreesList = await AddaddressModel.find({ loginUserid: id });
    res.json({ message: "Received List", data: getAddreesList });
    // console.log(getAddreesList);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = AddnewAddress;
