const {
  clientID,
  clientSecret,
  callbackURL
} = require('../auth.json').google

module.exports.config = {
  Strategy: require('passport-google-oauth2').Strategy,
  vendor: 'google'
}

module.exports.strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true,
  scope: [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.login'
  ]
}

module.exports.strategy = require('./_strategy')
