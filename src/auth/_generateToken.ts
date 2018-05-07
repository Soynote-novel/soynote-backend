import * as model from '../model'
import { JWT } from '../api'

export default async (req: any, res: any) => {
  const token = await JWT.createToken(req.user) // create jwt token

  res.cookie('sessToken', token, {
    httpOnly: true
  })

  res.redirect('/oauth/loginsuccess')

  await model.RecentIP.log({ user: req.user.id, ip: req.ip.replace('::ffff:', '') })
}
