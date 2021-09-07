const { Router } = require("express");

const router = Router();

/**
 * @route GET api/profile/me
 * @description Test route
 * @access public
 */

router.get("/", (req, res) => {
  res.send("Profile Route!");
});

module.exports = router;
