import { Request, Response } from 'express'
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

declare global {
  namespace Express {
    interface Request {
      token: Token
    }
  }
}

async function LoginCheck (req: Request, res: Response, next: Function): Promise<void> {
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
