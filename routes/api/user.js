const express = require("express");
const router = express.Router();

// @route   GET request api/user/test
// @Ddesc   test user route
// @access  public route
router.get("/test", (req, res) => res.json({ msg: "user works" }));

module.exports = router;
