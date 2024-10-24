const express = require("express");
const router = express.Router();
const Registerdata = require("../models/RegisterUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

// RegisterRoute
router.post("/register", async (req, res) => {
  const { userName, userEmail, typeofUsers, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await Registerdata.findOne({ userEmail });
    if (existingUser) {
      res.status(400).json({ message: "already user Exist" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    //Create new User
    const newUser = new Registerdata({
      userName,
      userEmail,
      typeofUsers,
      password: hashpassword,
    });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { userEmail, password } = req.body;
  console.log(userEmail, password);

  try {
    // Check if user exists
    const CheckUser = await Registerdata.findOne({ userEmail });
    if (!CheckUser) {
      return res
        .status(400)
        .json({ message: "Invalid UserEmail Address credentials" });
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, CheckUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Passwords" });
    }

    //generate JWT token
    const token = jwt.sign(
      {
        id: CheckUser._id,
        useremail: CheckUser.userEmail,
      },
      "r_d_g_m_a_v1112#",
      { expiresIn: "3h" }
    );

    res.status(200).json({
      token,
      userId: CheckUser._id,
      userEmail: CheckUser.userEmail,
      userName: CheckUser.userName,
      typeofUsers: CheckUser.typeofUsers,
    });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/getcustomerList", auth, async (req, res) => {
  try {
    const getUsers = await Registerdata.find();
    res.json({ message: "This is a protected route", data: getUsers });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
