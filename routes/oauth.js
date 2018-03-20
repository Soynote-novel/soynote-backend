const router = require('express').Router()
const passport = require('passport')

const auth = require('../auth')

router.all('/', (req, res) => {
  res.status(404)
  res.send()
  res.end()
})

// passport configure
passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))

// passport auth configure
const configurePassport = ({ vendor, Strategy, strategyConfig }) => {
  const option = {
    successRedirect: '/oauth/loginsuccess',
    failureRedirect: '/oauth/loginfail'
  }

  router.get(`/${vendor}`, passport.authenticate(vendor))
  router.get(`/${vendor}/callback`, passport.authenticate(vendor, option))

  passport.use(new Strategy(strategyConfig, auth._strategy(process, vendor)))
}

configurePassport(auth.facebook)
configurePassport(auth.google)
configurePassport(auth.kakao)
configurePassport(auth.naver)
configurePassport(auth.twitter)

// oauth success
router.get('/loginsuccess', (req, res) => {
  console.log(req.session)

  const message = (req.session.require)
    ? 'oauth success, require register'
    : 'oauth success, user is valid'

  res.status(200)
  res.send(message)
  res.end()
})

router.get('/loginfail', (req, res) => {
  res.status(400)
  res.send('oauth failure')
  res.end()
})

module.exports = router
