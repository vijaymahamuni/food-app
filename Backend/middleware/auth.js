const jwt = require("jsonwebtoken");

// Middleware to protect routes
const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log("token", token);

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const verified = jwt.verify(token, "r_d_g_m_a_v1112#");
    req.user = verified.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
module.exports = auth;
