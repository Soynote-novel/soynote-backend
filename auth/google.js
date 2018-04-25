const {
  clientID,
  clientSecret,
  callbackURL
} = require('../auth.json').google

module.exports.vendor = 'google'

module.exports.Strategy = require('passport-google-oauth2').Strategy

module.exports.strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true,
  scope: [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.login'
  ],
  session: false
}
