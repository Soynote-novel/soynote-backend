const config = require('../auth.json')
const model = require('../model')

module.exports.config = {
  Strategy: require('passport-kakao').Strategy,
  vendor: 'kakao'
}

module.exports.strategyConfig = {
  clientID: config.kakao.clientID,
  callbackURL: config.kakao.callbackURL,
  passReqToCallback: true
}

module.exports.strategy = (process, config) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    let user = await model.OAuth.findByOauth(profile.id, 'kakao')
    if (user) {
      const { id, email, nickname, isAdmin } = user.user
      req.session = { id, email, nickname, isAdmin }
      let $p = {
        vendor: 'kakao',
        oauthId: profile.id
      }
      done(null, $p)
    } else {
      req.session.requireRegister = true
      let $p = {
        vendor: 'kakao',
        oauthId: profile.id
      }
      done(null, $p)
    }
  }
}
