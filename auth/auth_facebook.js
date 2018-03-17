const config = require('../auth.json')
const model = require('../model')

module.exports.config = {
  Strategy: require('passport-facebook').Strategy,
  vendor: 'facebook'
}

module.exports.strategyConfig = {
  clientID: config.facebook.clientID, // 보안을 위해서입니다.
  clientSecret: config.facebook.clientSecret, // 이 방법을 사용하는 것을
  callbackURL: config.facebook.callbackURL, // 적극 권장합니다.
  profileFields: ['id', 'name', 'displayName'],
  passReqToCallback: true
}

module.exports.strategy = (process, config) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    let user = await model.OAuth.findByOauth(profile.id, 'facebook')
    if (user) {
      const { id, email, nickname, isAdmin } = user.user
      req.session = { id, email, nickname, isAdmin }
      let $p = {
        vendor: 'facebook',
        oauthId: profile.id
      }
      done(null, $p)
    } else {
      req.session.requireRegister = true
      let $p = {
        vendor: 'facebook',
        oauthId: profile.id
      }
      done(null, $p)
    }
  }
}
