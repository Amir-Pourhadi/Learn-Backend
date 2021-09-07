const { Router } = require("express");

const router = Router();

/**
 * @route GET api/cards
 * @description Test route
 * @access public
 */

router.get("/", (req, res) => {
  res.send("Cards Route!");
});

module.exports = router;
