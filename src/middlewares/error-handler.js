const CustomError = require("../errors/custom-error");

module.exports = errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    const errors = err.serializeErrors();
    return res.status(err.statusCode).send({ errors });
  }
  console.error(err);
  res.status(400).send({
    errors: [{ message: "Something went wrong!" }],
  });
};
