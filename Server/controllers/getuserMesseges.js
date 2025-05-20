const Message = require("../models/Message");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.userMess = async (req, res) => {
  const token = req.cookies.token;

  if (token) {
    const userId = jwt.verify(token, "suuuuuuuuuuuuuuuuuuuuuuu").id
    
    const message = await Message.find({recipient:userId});
    console.log(message);

    res.status(200).json({ message: "User", message});
  } else {
    res.status(401).json({ error: "No token, unauthorized access" });
  }
};
