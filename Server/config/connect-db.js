const mongoose = require("mongoose");
const connectDb = () => {
  mongoose.connect("mongodb://localhost:27017/UnkownChat").then(() => {
    console.log("MongoDB connected successfully");
  });
};

module.exports = connectDb;
