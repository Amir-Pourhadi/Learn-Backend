const express = require("express");
const router = express.Router();

/**
 * @route GET api/cards
 * @desc test Route
 * @access public
 */

router.get("/", (req, res) => {
  res.send("Cards Route");
});

module.exports = router;
