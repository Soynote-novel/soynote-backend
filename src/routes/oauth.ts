import { Router } from 'express'
import * as passport from 'passport'
import { returnForm } from '../api'

const router = Router()

import * as auth from '../auth'

passport.serializeUser((user, done) => {
  done(null, {})
})

passport.deserializeUser((user, done) => {
  done(null, {})
})

// passport auth configure
const configurePassport = (configure: { vendor: string, Strategy: any, strategyConfig: any }) => {
  const { vendor, Strategy, strategyConfig } = configure
  const option = {
    failureRedirect: '/oauth/loginfail'
  }

  router.get(`/${vendor}`, passport.authenticate(vendor))
  router.get(`/${vendor}/callback`, passport.authenticate(vendor, option), auth._generateToken)

  passport.use(new Strategy(strategyConfig, auth._strategy(vendor)))
}

configurePassport(auth.facebook)
configurePassport(auth.google)
configurePassport(auth.kakao)
configurePassport(auth.naver)
configurePassport(auth.twitter)

// oauth success
router.get('/loginsuccess', (req, res) => {
  const payload = returnForm.isSuccess('oauth success')

  res.status(200)
  res.jsonp(payload)
  res.end()
})

router.get('/loginfail', (req, res) => {
  const payload = returnForm.isError('oauth error')

  res.status(400)
  res.jsonp(payload)
  res.end()
})

export default router
