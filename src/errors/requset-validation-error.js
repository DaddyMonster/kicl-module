const CustomError = require("./custom-error");

module.exports = class RequestValidationError extends CustomError {
  constructor(errors) {
    super("Invalid request parameters");
    this.statusCode = 400;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
};
