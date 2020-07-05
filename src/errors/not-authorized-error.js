const CustomError = require("./custom-error");
const { NO_AUTH } = require("../events/clientEvents");
module.exports = class NotAuthorizedError extends CustomError {
  constructor() {
    super("Not Authorized");
    this.statusCode = 401;
    this.reason = "권한이 없거나 세션이 만료되었습니다. 다시 로그인 해주세요.";

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason, type: NO_AUTH }];
  }
};
