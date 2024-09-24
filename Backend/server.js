const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express app
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only the React frontend
  })
);
// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// const User = mongoose.model("User", UserSchema);

const userRoutes = require("./routes/LoginPagedata");
// API route to handle POST request
app.use("/api/users", userRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
