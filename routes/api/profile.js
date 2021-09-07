const { Router } = require("express");

const router = Router();

/**
 * @route GET api/profile/me
 * @description Get current user's profile
 * @access private
 */

router.get("/", (req, res) => {
  res.send("Profile Route!");
});
