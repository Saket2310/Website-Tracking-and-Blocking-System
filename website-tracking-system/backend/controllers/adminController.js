const User = require("../models/User");
const BlockedSite = require("../models/BlockedSite");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getBlockedSites = async (req, res) => {
  const sites = await BlockedSite.find();
  res.json(sites);
};

exports.addBlockedSite = async (req, res) => {
  const { domain } = req.body;
  const site = await BlockedSite.create({ domain, addedBy: req.user.id });
  res.json(site);
};

