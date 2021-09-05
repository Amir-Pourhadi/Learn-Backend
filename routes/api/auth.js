const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

/**
 * @route GET api/auth
 * @desc test Route
 * @access public
 */

router.get("/", auth, async (req, res) => {
  res.send("Auth Route");
});

module.exports = router;
