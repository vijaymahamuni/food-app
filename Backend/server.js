const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db.js");
const AddCustomer = require("./routes/RegisterPagedata.js");
const foodRouter = require("./routes/foodRouter.js");
// Initialize Express app
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only the React frontend
    origin: "http://localhost:8080", // Allow only the React frontend
  })
);

// MongoDB connection
connectDB();

//Api End point
// app.use("/api/food", foodRouter);
app.use("/api/food", AddCustomer);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
