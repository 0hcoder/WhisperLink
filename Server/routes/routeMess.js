const express = require("express");
const Message = require("../models/Message");
const User = require("../models/User");

const router = express.Router();

// POST route to send a message to a specific user (anonymous)
router.post("/send/:username", async (req, res) => {
  const { message } = req.body; // Get the message from the request body

  try {
    // Find the recipient user by their username
    const user = await User.findOne({ username: req.params.username });

    if (user) {
      // Create a new message and associate it with the recipient
      const newMessage = new Message({ message, recipient: user._id });
      await newMessage.save(); // Save the message in the database

      // Send a response confirming the message was sent
      res.status(200).json({ message: "Message sent successfully" });
    } else {
      res.status(404).json({ error: "Recipient not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while sending the message" });
  }
});

module.exports = router;
