const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");




const router = express.Router();

// Registration route
router.post("/users/register", async (req, res) => {
  const { username, email, password } = req.body;
 
  const hashedPassword = await bcrypt.hash(password, 10);
  
  if (!hashedPassword) {
    return res.status(500).json({ error: "Error hashing password" });
  }
  
  const uniqueLink = `http://localhost:5173/sendmess/${username}`;
  try {
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      uniqueLink,
    });
    await newUser.save();

    

    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "User created", newUser });
  } catch (err) {
    res.status(400).json({ error: "Error creating user" });
  }
});

// Login route
router.post("/users/login", async (req, res) => {
 
  
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
   
    res.json({ message: "Logged in successfully", user });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
});
router.get("/user/logout",(req, res) => {
  res.clearCookie("token");

  res.json({ message: "Logged out successfully" });
})


module.exports = router;
