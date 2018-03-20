const {
  consumerKey,
  consumerSecret,
  callbackURL
} = require('../auth.json')

module.exports.vendor = 'twitter'

module.exports.Strategy = require('passport-twitter').Strategy

module.exports.strategyConfig = {
  consumerKey,
  consumerSecret,
  callbackURL,
  passReqToCallback: true
}
