const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db.js");
const AddCustomer = require("./routes/RegisterPagedata.js");
const foodRouter = require("./routes/foodRouter.js");
// const AddRestaurant = require("./routes/AddRestaurant.js");
const AddnewRestro = require("./routes/AddRestaurant.js");
const AddnewMenu = require("./routes/AddMenuitem.js");
const AddcartItems = require("./routes/AddcartItems.js");
const AddnewAddress = require("./routes/AddnewAddress.js");
const stripePayment = require("./routes/StripePayment.js");
const orderItems = require("./routes/Orders.js");
// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.static("uploads"));

// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow only the React frontend
//     origin: "http://localhost:8080", // Allow only the React frontend
//   })
// );
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "https://food-app-frontend-kcj0.onrender.com",
    ],
    credentials: true,
  })
);
// MongoDB connection
connectDB();

//Api End point
// app.use("/api/food", foodRouter);
app.use("/api/food", AddCustomer);

//addRestaurant
app.use("/api/owner", AddnewRestro);

//addMenuItem
app.use("/api/menu", AddnewMenu);

//addCart items
app.use("/api/cart", AddcartItems);

//add_newaddress
app.use("/api/order", AddnewAddress);

//stripe payment method
app.use("/api/payment", stripePayment);

//orderItems data
app.use("/api/order", orderItems);

app.use("/uploads", express.static("uploads")); // Serve images statically

//Add Favt from user
// app.use("/api/customer", FavtRestaurant);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
