import * as Express from 'express'
import { JWT } from '../api'

interface Token {
  id: string,
  email: string,
  nickname: string,
  isAdmin: boolean,
  vendor: string,
  oAuthId: number,
  requireRegister: string,
  iat: number,
  exp: number,
  iss: string,
  sub: string
}

interface IRequest {
  token: Token
}

async function LoginCheck (req: any, res: Express.Response, next: Express.NextFunction): Promise<void> {
  let header = req.get('authorization')
  if (!header) {
    const payload = { valid: false, status: 'Please log in' }
    res.status(400)
    res.json(payload)
    res.end()
    return
  } else {
    // decode the token
    let splitedHeader = header.split(' ')
    let token = splitedHeader[1]

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
}

export default LoginCheck
