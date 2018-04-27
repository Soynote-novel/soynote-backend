const model = require('../model')
const { JWT } = require('../api')

module.exports = async (req, res) => {
  const token = await JWT.createToken(req.user) // create jwt token

  res.cookie('sessToken', token, {
    httpOnly: true
  })

  res.status(200)
  res.jsonp(req.user)
  res.end()

  await model.RecentIP.log({ user: req.user.id, ip: req.ip.replace('::ffff:', '') })
}
