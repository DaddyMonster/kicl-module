module.exports = class CustomError {
  constructor(message) {
    Object.setPrototypeOf(this, CustomError.prototype);
  }
};
