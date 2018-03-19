const {
  clientID,
  clientSecret,
  callbackURL
} = require('../auth.json').naver

module.exports.config = {
  Strategy: require('passport-naver').Strategy,
  vendor: 'naver'
}

module.exports.strategyConfig = {
  clientID,
  clientSecret,
  callbackURL,
  passReqToCallback: true
}

module.exports.strategy = require('./_strategy')
