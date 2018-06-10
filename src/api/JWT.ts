import * as jwt from 'jsonwebtoken'
import * as fs from 'fs'
const config = require('../../config.json')

interface JWTToken {
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

class JWTBuilder {
  private readonly issuer: string
  private readonly privkey: any
  private readonly publkey: any
  private readonly subject: string
  private readonly algorithm: string
  private readonly maxAge: number|string

  constructor () {
    this.issuer = config.jwt.issuer
    this.privkey = fs.readFileSync(config.jwt.private)
    this.publkey = fs.readFileSync(config.jwt.public)
    this.subject = config.jwt.subject
    this.algorithm = 'RS256'
    this.maxAge = config.jwt.maxAge
  }

  async createToken (payload: object): Promise<string> {
    const options = {
      algorithm: this.algorithm,
      expiresIn: this.maxAge,
      issuer: this.issuer,
      subject: this.subject
    }
    const result = await this._createJWT(payload, this.privkey, options)
    return result
  }

  async verifyToken (token: string): Promise<JWTToken> {
    const options = {
      algorithm: this.algorithm,
      issuer: this.issuer,
      subject: this.subject,
      maxAge: this.maxAge
    }
    const result = await this._verifyJWT(token, this.publkey, options)
    return result
  }

  private _createJWT (payload: object, secret: any, options: object): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (error: Error, token: string) => {
        if (error) reject(error)
        else resolve(token)
      })
    })
  }

  private _verifyJWT (token: string, secret: any, options: object): Promise<JWTToken> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, options, (error: Error, decoded: any) => {
        if (error) reject(error)
        else resolve(decoded)
      })
    })
  }
}

export default new JWTBuilder()
