const { Router } = require("express");

const router = Router();

/**
 * @route POST api/users
 * @description Test route
 * @access public
 */

router.post("/", (req, res) => {
  res.send("Users Route!");
  console.log(req.body);
});

module.exports = router;
