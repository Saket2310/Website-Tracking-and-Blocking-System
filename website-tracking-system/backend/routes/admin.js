const express = require("express");
const router = express.Router();
const { getAllUsers, getBlockedSites, addBlockedSite } = require("../controllers/adminController");
const auth = require("../middleware/auth");

router.get("/users", auth, getAllUsers);
router.get("/blocked", auth, getBlockedSites);
router.post("/blocked", auth, addBlockedSite);

module.exports = router;

