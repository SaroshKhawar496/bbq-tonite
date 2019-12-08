// api/services/tokenService.js
const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

const issueToken = user => {
  const { _id: id, role } = user;
  const payload = {
    user: { id, role }
  };
  const token = jwt.sign(payload, SECRET, { expiresIn: "5m" });
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) return res.status(401).send({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, SECRET);
    req.user = verified;
  } catch (err) {
    return res.status(400).send({ error: "Invalid Token" });
  }
  next();
};

module.exports = {
  issueToken: issueToken,
  verifyToken: verifyToken
};
