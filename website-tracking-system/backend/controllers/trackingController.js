const AccessLog = require("../models/AccessLog");

exports.logAccess = async (req, res) => {
  const { url, timestamp } = req.body;
  await AccessLog.create({ url, timestamp });
  res.status(201).json({ message: "Logged" });
};

