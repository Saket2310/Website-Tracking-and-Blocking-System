const mongoose = require("mongoose");

const blockedSiteSchema = new mongoose.Schema({
  domain: String,
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("BlockedSite", blockedSiteSchema);

