const express = require("express");
const router = express.Router();

/**
 * @route POST api/users
 * @desc test Route
 * @access public
 */

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Users Route");
});

module.exports = router;
