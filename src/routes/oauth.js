const router = require('express').Router()
const passport = require('passport')

const auth = require('../auth/index')

router.all('/', (req, res) => {
  res.status(404)
  res.send()
  res.end()
})

// passport auth configure
const configurePassport = ({ vendor, Strategy, strategyConfig }) => {
  const option = {
    failureRedirect: '/oauth/loginfail',
    session: false
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
  /* const message = (req.)
    ? 'oauth success, require register'
    : 'oauth success, user is valid' */
  const message = 'oauth success'

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
