const jwt = require("jsonwebtoken");
const config = require("config");

// Because it is a middleware function it has next
// We use next to just say it to move to the other piece of middleware
module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  // Check if no token and the route IS PROTECTED deny authorization
  if (!token) {
    // Error 401 is not authorized error
    return res.status(401).json({ msg: "No token, Authorization Denied!" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // Decoded is just the payload we already sent
    req.user = decoded.user;
    next();

    // Handle errors
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
