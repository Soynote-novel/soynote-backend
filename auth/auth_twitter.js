const config = require('../auth.json')
const model = require('../model')

module.exports.config = {
  Strategy: require('passport-twitter').Strategy,
  vendor: 'twitter'
}

module.exports.strategyConfig = {
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  callbackURL: config.twitter.callbackURL,
  passReqToCallback: true
}

module.exports.strategy = (process, config) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    let user = await model.OAuth.findByOauth(profile.id, 'twitter')
    if (user) {
      const { id, email, nickname, isAdmin } = user.user
      req.session = { id, email, nickname, isAdmin }
      let $p = {
        vendor: 'twitter',
        oauthId: profile.id
      }
      done(null, $p)
    } else {
      req.session.requireRegister = true
      let $p = {
        vendor: 'twitter',
        oauthId: profile.id
      }
      done(null, $p)
    }
  }
}
