const model = require('../model')
import { JWT } from '../api'

module.exports = async (req: any, res: any): Promise<void> => {
  const token = await JWT.createToken(req.user) // create jwt token

  res.cookie('sessToken', token, {
    httpOnly: true
  })

  res.status(200)
  res.jsonp(req.user)
  res.end()

  await model.RecentIP.log({ user: req.user.id, ip: req.ip.replace('::ffff:', '') })
}
