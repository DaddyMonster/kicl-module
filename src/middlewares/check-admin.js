const jwt = require("jsonwebtoken");

module.exports = checkAdmin = (req, res, next) => {
  if (!req.session.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
    if (payload.role === "admin" || payload.role === "super") {
      next();
    } else {
      throw new Error("NO PERMISSION || ADMIN ACCESS ONLY");
    }
  } catch (err) {
    console.log(err);
    throw new Error("ERR CHECKING ADMIN");
  }
};
