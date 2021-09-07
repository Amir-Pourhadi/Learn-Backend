const { Router } = require("express");

const router = Router();

/**
 * @route GET api/auth
 * @description Test route
 * @access public
 */

router.get("/", (req, res) => {
  res.send("Auth Route!");
});

module.exports = router;
