const express = require("express");
const router = express.Router();
const { logAccess } = require("../controllers/trackingController");

router.post("/log", logAccess);

module.exports = router;

