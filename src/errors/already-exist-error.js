const CustomError = require("./custom-error");
const clientEvents = require("../events/clientEvents");

module.exports = class ExistError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.message = message;
    Object.setPrototypeOf(this, ExistError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: `이미 존재하는 ${this.message} 입니다.`,
        type: clientEvents.ALREADY_EXIST,
      },
    ];
  }
};
