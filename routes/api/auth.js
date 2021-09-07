const { Router } = require("express");

const router = Router();

/**
 * @route GET api/auth
 * @description authenticate users
 * @access private
 */

router.get("/", (req, res) => {
  res.send("Auth Route!");
});
