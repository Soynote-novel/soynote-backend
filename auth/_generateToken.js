const JWT = require('../api/jwt')

module.exports = async (req, res) => {
  const token = await JWT.createToken(req.user) // create jwt token

  res.cookie('sessToken', token, {
    httpOnly: true
  })

  res.status(200)
  res.jsonp(req.user)
  res.end()
}
