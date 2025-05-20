const User = require("../models/User");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userData = async (req, res) => {
  const token = req.cookies.token;
  console.log(token);

  if (token) {
    const userId = jwt.verify(token, "suuuuuuuuuuuuuuuuuuuuuuu").id;
    const user = await User.findById(userId);
    res.status(200).json({ message: "User", user });
  } else {
    res.status(401).json({ error: "No token, unauthorized access" });
  }
};