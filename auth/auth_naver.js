const config = require('../auth.json')
const model = require('../model')

module.exports.config = {
  Strategy: require('passport-naver').Strategy,
  vendor: 'naver'
}

module.exports.strategyConfig = {
  clientID: config.naver.clientID,
  clientSecret: config.naver.clientSecret,
  callbackURL: config.naver.callbackURL,
  passReqToCallback: true
}

module.exports.strategy = (process, config) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    let user = await model.OAuth.findByOauth(profile.id, 'naver')
    if (user) {
      const { id, email, nickname, isAdmin } = user.user
      req.session = { id, email, nickname, isAdmin }
      let $p = {
        vendor: 'naver',
        oauthId: profile.id
      }
      done(null, $p)
    } else {
      req.session.requireRegister = true
      let $p = {
        vendor: 'naver',
        oauthId: profile.id
      }
      done(null, $p)
    }
  }
}
