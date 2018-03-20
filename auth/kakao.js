const {
  clientID,
  callbackURL
} = require('../auth.json').kakao

module.exports.vendor = 'kakao'

module.exports.Strategy = require('passport-kakao').Strategy

module.exports.strategyConfig = {
  clientID,
  callbackURL,
  passReqToCallback: true
}
