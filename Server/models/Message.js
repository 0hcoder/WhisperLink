const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
