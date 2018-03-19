const {
  clientID,
  callbackURL
} = require('../auth.json').kakao

module.exports.config = {
  Strategy: require('passport-kakao').Strategy,
  vendor: 'kakao'
}

module.exports.strategyConfig = {
  clientID,
  callbackURL,
  passReqToCallback: true
}

module.exports.strategy = require('./_strategy')
