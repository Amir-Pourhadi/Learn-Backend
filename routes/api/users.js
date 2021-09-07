const { Router } = require("express");

const router = Router();

/**
 * @route POST api/users
 * @description Register user
 * @access public
 */

router.post("/", (req, res) => {
  res.send("Users Route!");
});
