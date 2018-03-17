const config = require('../auth.json')
const model = require('../model')

module.exports.config = {
  Strategy: require('passport-google-oauth2').Strategy,
  vendor: 'google'
}

module.exports.strategyConfig = {
  clientID: config.google.clientID, // 보안을 위해서입니다.
  clientSecret: config.google.clientSecret, // 이 방법을 사용하는 것을
  callbackURL: config.google.callbackURL, // 적극 권장합니다.
  passReqToCallback: true,
  scope: ['profile', 'email', 'https://www.googleapis.com/auth/plus.login']
}

module.exports.strategy = (process, config) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    let user = await model.OAuth.findByOauth(profile.id, 'google')
    if (user) {
      const { id, email, nickname, isAdmin } = user.user
      req.session = { id, email, nickname, isAdmin }
      let $p = {
        vendor: 'google',
        oauthId: profile.id
      }
      done(null, $p)
    } else {
      req.session.requireRegister = true
      let $p = {
        vendor: 'google',
        oauthId: profile.id
      }
      done(null, $p)
    }
  }
}
