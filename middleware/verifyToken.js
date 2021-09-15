const jwt = require("jsonwebtoken");
const { secret } = require("../config/keys");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  /* Get token from header string */
  const token = authHeader && authHeader.split(" ")[1];

  /* if token is not found */
  if (token == null)
    return res.status(400).json({
      success: false,
      message: "Token not found",
    });

  jwt.verify(token, secret, (err, user) => {
    if (err)
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
