const model = require('../model')

module.exports = (vendor) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    const user = await model.OAuth.findByOAuth(profile.id, vendor)

    if (user) {
      const { id, email, nickname, isAdmin } = user.user
      req.session = { id, email, nickname, isAdmin }
    } else {
      req.session.requireRegister = true
    }

    const result = {
      vendor,
      oAuthId: profile.id
    }

    done(null, result)
  }
}
