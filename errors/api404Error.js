const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')

class Api404Error extends BaseError {
  constructor (
    name,
    httpCode = httpStatusCodes.NOT_FOUND,
    description = 'Not found.',
    isOperational = true
  ) {
    super(name, httpCode, isOperational, description)
  }
}

module.exports = Api404Error
