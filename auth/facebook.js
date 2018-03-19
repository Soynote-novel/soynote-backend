const {
  clientID,
  clientSecret,
  callbackURL
} = require('../auth.json').facebook

module.exports.config = {
  Strategy: require('passport-facebook').Strategy,
  vendor: 'facebook'
}

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

module.exports.strategy = require('./_strategy')
