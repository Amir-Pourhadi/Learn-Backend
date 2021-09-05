const jwt = require("jsonwebtoken");
const config = require("config");

// because it is a middleware function it has next argument
// we use next to just say it to move to  the other piece of middleware
module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  // check it no token and the route is PROTECTED
  if (!token) {
    // Error 401 is not authorized error
    return res.status(401).json({ msg: "No token, authorization denied!" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // decoded is just the payload we already sent
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid!" });
  }
};
