const {
  clientID,
  clientSecret,
  callbackURL
} = require('../auth.json').naver

module.exports.vendor = 'naver'

module.exports.Strategy = require('passport-naver').Strategy

module.exports.strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true
}
