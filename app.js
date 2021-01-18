const express = require('express')
const app = express()
const logger = require('./loggers/logger')
const httpLogger = require('./loggers/httpLogger')
const Api500Error = require('./errors/api500Error')

app.get('/bam', (req, res, next) => {
  console.log('Bam!')
  res.status(200).send('Bam!')
})

app.use(httpLogger)

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!')
})

app.get('/boom', (req, res, next) => {
  try {
    throw new Error('Wowza!')
  } catch (error) {
    logger.error('Whooops! This broke with error: ', error)
    res.status(500).send('Error!')
  }
})

app.get('/errorhandler', (req, res, next) => {
  try {
    throw new Api500Error('Wowza!')
  } catch (error) {
    next(error)
  }
})

app.use(logErrors)
app.use(errorHandler)

function logErrors (err, req, res, next) {
  console.error(err)
  next(err)
}
function errorHandler (err, req, res, next) {
  res.status(500).send('Error!')
}

const port = process.env.PORT || 80
app.listen(port, () =>
  logger.info(`Express.js listening on port ${port}.`))
