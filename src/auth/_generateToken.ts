import * as model from '../model'
import { JWT, sessToken } from '../api'

export default async (req: any, res: any) => {
  const token = await JWT.createToken(req.user) // create jwt token

  sessToken.setToken(res, token)

  res.redirect('/oauth/loginsuccess')

  if(req.user.id) {
    await model.RecentIP.log({ user: req.user.id, ip: req.ip.replace('::ffff:', '') })
  }
}
