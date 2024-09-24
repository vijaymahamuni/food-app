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

//Get Edit -to get users data by id
router.get("/:id", async (req, res) => {
  try {
    const users = await LoginUserlist.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

//update -by user
router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  const UpdateUSer = await LoginUserlist.findByIdAndUpdate(req.params.id, {
    name,
    email,
  });
  if (!UpdateUSer) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json({ message: "USers Details Updated Successully" });
});

// DELETE route - to delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await LoginUserlist.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ message: "user not found" });
    }
    res.json({ message: "USers Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
});

module.exports = router;
