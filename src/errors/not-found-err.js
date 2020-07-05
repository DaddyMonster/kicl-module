const CustomError = require("./custom-error");

module.exports = class NotFoundError extends CustomError {
  constructor() {
    super();
    this.statusCode = 404;
    this.reason = "Route not found";

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
};
