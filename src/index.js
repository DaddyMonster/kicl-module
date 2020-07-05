const badRequestError = require("./errors/bad-request-error");
const dbConnectionError = require("./errors/db-connection-error");
const notAuthorizedErr = require("./errors/not-authorized-error");
const notFoundErr = require("./errors/not-found-err");
const requestValidationErr = require("./errors/requset-validation-error");
const alreadyExistErr = require("./errors/already-exist-error");
const customError = require("./errors/custom-error");

const currentUser = require("./middlewares/current-user");
const errHandler = require("./middlewares/error-handler");
const requireAuth = require("./middlewares/require-auth");

const baseListener = require("./events/base-listener");
const basePublisher = require("./events/base-publisher");
const subjects = require("./events/subjects");

const generateUnique = require("./helpers/generateUnique");
const checkAdmin = require("./middlewares/check-admin");

const clientEvents = require("./events/clientEvents");
module.exports = {
  badRequestError,
  dbConnectionError,
  notAuthorizedErr,
  notFoundErr,
  requestValidationErr,
  customError,
  currentUser,
  errHandler,
  requireAuth,
  baseListener,
  basePublisher,
  subjects,
  generateUnique,
  checkAdmin,
  alreadyExistErr,
  clientEvents,
};
