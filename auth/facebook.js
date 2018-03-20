const {
  clientID,
  clientSecret,
  callbackURL
} = require('../auth.json').facebook

module.exports.vendor = 'facebook'

module.exports.Strategy = require('passport-facebook').Strategy

module.exports.strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true,
  profileFields: [
    'id',
    'name',
    'displayName'
  ]
}
