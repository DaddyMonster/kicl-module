const jwt = require("jsonwebtoken");
const NotAuthorizedError = require("../errors/not-authorized-error");
const BadRequestError = require("../errors/bad-request-error");
module.exports = currentUser = (req, res, next) => {
  if (!req.session) {
    res.send({ message: "not logged in yet " });
  }
  if (!req.session.jwt) {
    throw new NotAuthorizedError();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
    req.currentUser = payload;
  } catch (err) {
    console.log(err);
    throw new BadRequestError();
  }

  next();
};
