const {
  consumerKey,
  consumerSecret,
  callbackURL
} = require('../auth.json').twitter

module.exports.vendor = 'twitter'

module.exports.Strategy = require('passport-twitter').Strategy

module.exports.strategyConfig = {
  consumerKey,
  consumerSecret,
  callbackURL,
  passReqToCallback: true
}
