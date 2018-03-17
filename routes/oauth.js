const router = require('express').Router()
const passport = require('passport')
const path = require('path')
const items = [
  path.join(__dirname, '..', 'auth', 'auth_facebook.js'),
  path.join(__dirname, '..', 'auth', 'auth_google.js'),
  path.join(__dirname, '..', 'auth', 'auth_kakao.js'),
  path.join(__dirname, '..', 'auth', 'auth_naver.js'),
  path.join(__dirname, '..', 'auth', 'auth_twitter.js')
]

router.all('/', (req, res) => {
  res.status(404)
  res.send()
  res.end()
})

// passport configure
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

// passport auth configure
for (let i in items) {
  let auth = require(items[i])
  router.get('/' + auth.config.vendor, passport.authenticate(auth.config.vendor))
  router.get('/' + auth.config.vendor + '/callback', passport.authenticate(auth.config.vendor, {
    successRedirect: '/oauth/loginsuccess',
    failureRedirect: '/oauth/loginfail'
  }))
  passport.use(new auth.config.Strategy(auth.strategyConfig, auth.strategy(process, auth.config)))
}

// oauth success
router.get('/loginsuccess', (req, res) => {
  res.status(200)
  console.log(req.session)
  if (req.session.requireRegister) {
    res.send('oauth success, require register')
    res.end()
  } else {
    res.send('oauth success, user is valid')
    res.end()
  }
})

router.get('/loginfail', (req, res) => {
  res.status(400)
  res.send('oauth failure')
  res.end()
})

module.exports = router
