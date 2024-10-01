const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Vijay:yajiV1112@cluster0.yhjhf.mongodb.net/food-app"
    )
    .then(() => console.log("DB connected"));
};
module.exports = connectDB;
