const mongoose = require("mongoose");

const accessLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  url: String,
  timestamp: Date
});

module.exports = mongoose.model("AccessLog", accessLogSchema);

