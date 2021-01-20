const winston = require('winston')
// const Logsene = require('winston-logsene')

const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  }
}

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.Console(options.console),
    // new Logsene({
    //   token: process.env.LOGS_TOKEN,
    //   level: 'debug',
    //   type: 'app_logs',
    //   url: 'https://logsene-receiver.sematext.com/_bulk'
    // })
  ],
  exitOnError: false
})

module.exports = logger
