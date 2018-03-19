const {
  consumerKey,
  consumerSecret,
  callbackURL
} = require('../auth.json')

module.exports.config = {
  Strategy: require('passport-twitter').Strategy,
  vendor: 'twitter'
}

module.exports.strategyConfig = {
  consumerKey,
  consumerSecret,
  callbackURL,
  passReqToCallback: true
}

module.exports.strategy = require('./_strategy')
