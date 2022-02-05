const express = require("express");
const router = express.Router();

// @route   GET request api/profile/test
// @Ddesc   test profile route
// @access  public route
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;
