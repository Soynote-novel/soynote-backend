const model = require('../model')

module.exports = (vendor) => {
  return async (req, accessToken, refreshToken, profile, done) => {
    const result = await model.OAuth.findByOAuth(profile.id, vendor)

    let payload

    if (result.user && result.user.id) {
      const { id, email, nickname, isAdmin } = result.user
      payload = { id, email, nickname, isAdmin, vendor, oAuthId: profile.id, requireRegister: false }
    } else if (result.user && !result.user) {
      payload = { vendor, oAuthId: profile.id, requireRegister: true }
    } else {
      await model.OAuth.createDummyUser({oAuthId: profile.id, vendor})
      payload = { vendor, oAuthId: profile.id, requireRegister: true }
    }

    done(null, payload)
  }
}
