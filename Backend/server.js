const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db.js");
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
app.use("/api/food", foodRouter);

// mongoose
//   .connect("mongodb://localhost:27017/foodApp", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error(err));

// mongodb+srv://Vijay:yajiV1112@cluster0.yhjhf.mongodb.net/?

// const User = mongoose.model("User", UserSchema);

// const userRoutes = require("./routes/LoginPagedata");
// const RegisterRoutes = require("./routes/RegisterPagedata");

// API route to handle POST request
// app.use("/api/users", userRoutes);

// app.use("/api/register_users", RegisterRoutes);
// app.use("/api/login", RegisterRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
