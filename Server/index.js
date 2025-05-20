const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/connect-db");
const dotenv = require("dotenv");
dotenv.config();
connectDb();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
// MongoDB connection


// Registration route
const userRoutes = require("./routes/routeUserCreation");
const userMessages = require("./routes/routeMess");
const getUserData = require("./routes/userRoute");

app.use("/api",userRoutes);
app.use("/api",userMessages)
app.use("/api",getUserData);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
