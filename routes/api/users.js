const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

/**
 * @route POST api/users
 * @desc Test route
 * @access Public
 */

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required, the length should be at least 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      //see if user exists
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      //Get users avatar
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

      user = new User({ name, email, password, avatar });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //JsonWebToken (JWT)
      const payload = { user: { id: user.id } };

      jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 36000000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
