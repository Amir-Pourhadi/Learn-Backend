const { Router } = require("express");

const router = Router();

/**
 * @route GET api/cards
 * @description Show all cards
 * @access public
 */

router.get("/", (req, res) => {
  res.send("Cards Route!");
});
