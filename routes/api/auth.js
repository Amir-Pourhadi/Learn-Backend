const { Router } = require("express");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const router = Router();

/**
 * @route GET api/auth
 * @description Test route
 * @access private
 */

router.get("/", auth, async (req, res) => {
  //Find the user
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);

    // Handle Errors
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @route POST api/auth
 * @description Authentication user and get token
 * @access public
 */

router.post(
  "/",
  [check("email", "Email is required").isEmail(), check("password", "Password is required").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid username or password" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid username or password" }] });
      }

      // Return JWT
      const payload = { user: { id: user.id } };

      jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 36000000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });

      // Handle errors
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
