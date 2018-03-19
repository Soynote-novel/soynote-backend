const model = require('../model')

module.exports = (process, config) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    const user = await model.OAuth.findByOAuth(profile.id, config.vendor)

    if (user) {
      const { id, email, nickname, isAdmin } = user.user
      req.session = { id, email, nickname, isAdmin }
    } else {
      req.session.requireRegister = true
    }

    const result = {
      vendor: config.vendor,
      oAuthId: profile.id
    }

    return done(null, result)
  }
}
