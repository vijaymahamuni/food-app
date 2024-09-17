const express = require("express");
const router = express.Router();
const LoginUserlist = require("../models/LoginUserlist");
// POST route - to create a new user
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = new LoginUserlist({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

// GET route - to get all users
router.get("/", async (req, res) => {
  try {
    const users = await LoginUserlist.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
