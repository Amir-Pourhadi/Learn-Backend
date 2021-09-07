const { Router } = require("express");

const router = Router();

/**
 * @route GET api/users
 * @description Test route
 * @access public
 */

router.get("/", (req, res) => {
  res.send("Users Route!");
});

module.exports = router;
