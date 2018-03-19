'use strict'

const log4js = require('log4js')
const express = require('express')
const onFinished = require('on-finished')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const session = require('express-session')
const passport = require('passport')
require('express-async-errors') // if use async function on express router, help to error logging
// const bluebird = require('bluebird')
// const redis = require('redis')

const config = require('./config.json')

const app = express()
const logger = log4js.getLogger()

// bluebird.promisifyAll(redis.RedisClient.prototype)
// bluebird.promisifyAll(redis.Multi.prototype)

/* const db = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.pass,
  db: config.redis.database
}) */

try {
  if (process.env.NODE_ENV === 'production') {
    logger.level = 'INFO'
  } else if (process.env.NODE_ENV === 'development') {
    logger.level = 'DEBUG'
  } else {
    logger.level = 'DEBUG'
    process.env.NODE_ENV = 'development'
  }
  logger.info(`${process.env.NODE_ENV} mode`)

  // main setting
  app.disable('x-powered-by')
  app.set('trust proxy', config.trustproxy)
  logger.info(`trust proxy: ${config.trustproxy}`)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(session({
    secret: 'wafflet',
    resave: false,
    saveUninitialized: true
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  app.use(cors({ origin: 'http://127.0.0.1:3000' }))

  // health moniter
  app.all('/health', (req, res) => {
    res.status(200)
    res.send()
    res.end()
  })

  // logger setup
  app.use((req, res, next) => {
    onFinished(res, (err, response) => {
      if (err) {
        logger.error(err)
      } else {
        const { statusCode } = response
        const { protocol, method, ip, originalUrl } = req
        const message = [
          protocol,
          method,
          statusCode,
          ip.replace('::ffff:', ''),
          originalUrl
        ].join(' ')

        logger.info(message)
      }
    })

    next()
  })

  // main page
  app.all('/', (req, res) => {
    const payload = {
      response: 'Welcome to soynote backend'
    }

    res.jsonp(payload)
    res.end()
  })

  app.use('/auth', require(path.join(__dirname, 'routes', 'auth.js')))
  app.use('/oauth', require(path.join(__dirname, 'routes', 'oauth.js')))

  app.use((req, res) => {
    const payload = {
      error: true,
      type: 'invalid uri'
    }

    res.status(400)
    res.jsonp(payload)
    res.end()
  })

  // error handler
  app.use((err, req, res) => {
    if (!err) return

    logger.error(err)

    const payload = {
      error: 'Something went wrong. Please contact the administrator.'
    }

    res.status(500)
    res.jsonp(payload)
    res.end()
  })

  /* db.on('error', (err) => {
    logger.error(err)
  }) */

  const port = config.port.http
  app.listen(port, () => logger.info(`HTTP listening: ${port}`))
} catch (err) {
  console.log(err)
}
