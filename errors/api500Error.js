const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')

class Api500Error extends BaseError {
  constructor (
    name,
    httpCode = httpStatusCodes.INTERNAL_SERVER,
    description = 'Internal server error.',
    isOperational = true
  ) {
    super(name, httpCode, isOperational, description)
  }
}

module.exports = Api500Error
