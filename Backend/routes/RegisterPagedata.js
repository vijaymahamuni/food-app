const express = require("express");
const router = express.Router();
const Registerdata = require("../models/RegisterUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register Route
router.post("/", async (req, res) => {
  const { userName, userEmail, phoneNum, password } = req.body;

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
      phoneNum,
      password: hashpassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
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
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, CheckUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //generate JWT token
    const token = jwt.sign(
      {
        id: CheckUser._id,
        useremail: CheckUser.userEmail,
      },
      "r_d_g_m_a_v1112#",
      { expiresIn: "1h" }
    );

    res.json({ token, userId: CheckUser._id });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});
// Middleware to protect routes
const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log("token", token);

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const verified = jwt.verify(token, "r_d_g_m_a_v1112#");
    req.user = verified.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
router.get("/", auth, async (req, res) => {
  try {
    const getUsers = await Registerdata.find();
    res.json({ message: "This is a protected route", data: getUsers });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
