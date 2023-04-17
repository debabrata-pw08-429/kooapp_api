require("dotenv").config();
const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
  const { token } = req.cookies;

  let ok = jwt.verify(token, process.env.JWT_SECRET);

  if (ok) {
    let users = jwt.decode(token);
    req.user = users;
  }

  next();
};

module.exports = AuthMiddleware;
