'use strict'

import * as log4js from 'log4js'
import * as express from 'express'
import * as onFinished from 'on-finished'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import * as passport from 'passport'
import { returnForm } from './api'

// const bluebird = require('bluebird')
// const redis = require('redis')

// if use async function on express router, help to error logging
import 'express-async-errors'

const config = require('../config.json')
import * as routes from './routes'

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

  app.use(cookieParser())

  app.use(passport.initialize())

  app.use(cors({ origin: config.CORS }))

  // health moniter
  app.all('/health', (req: any, res: any) => {
    res.status(200)
    res.send()
    res.end()
  })

  // logger setup
  app.use((req: any, res: any, next: any) => {
    onFinished(res, (err: any, response: any) => {
      if (err) {
        logger.error(err)

        return
      }

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
    })

    next()
  })

  // main page
  app.all('/', (req: any, res: any) => {
    const payload = returnForm.isSuccess('Welcome to soynote backend')

    res.status(200)
    res.jsonp(payload)
    res.end()
  })

  app.use('/auth', routes.auth)
  app.use('/oauth', routes.oauth)
  app.use('/novel', routes.novel)

  app.use((req: any, res: any) => {
    const payload = returnForm.isError('invalid uri')

    res.status(400)
    res.jsonp(payload)
    res.end()
  })

  // error handler
  app.use((err: any, req: any, res: any) => {
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

  const port = config['http_port']
  app.listen(port, () => logger.info(`HTTP listening: ${port}`))
} catch (err) {
  console.log(err)
}
