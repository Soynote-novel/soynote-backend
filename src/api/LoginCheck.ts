import { JWT } from '../api'

export default async (req: any, res: any, next: any) => {
  if (!req.headers && !req.headers.authorization) {
    const payload = { valid: false, status: 'Please log in' }
    res.status(400)
    res.json(payload)
    res.end()
    return
  }
  // decode the token
  let header = req.headers.authorization.split(' ')
  let token = header[1]

  let result

  try {
    result = await JWT.verifyToken(token)

    req.token = result

    next()
  } catch (error) {
    const payload = { valid: false, status: 'Token has expired' }

    res.status(404)
    res.json(payload)
    res.end()
  }
}
