const jwt = require('jsonwebtoken')

class JWT {
  constructor () {
    this.issuer = ''
    this.secret = ''
    this.subject = 'authInfo'
    this.algorithm = 'HS256'
    this.maxAge = '7d'
  }

  static async createToken (payload) {
    const options = {
      algorithm: this.algorithm,
      expiresIn: this.maxAge,
      issuer: this.issuer,
      subject: this.subject
    }
    const result = await this._createJWT(payload, this.secret, options)
    return result
  }

  static async verifyToken (token) {
    const options = {
      algorithm: this.algorithm,
      issuer: this.issuer,
      subject: this.subject,
      maxAge: this.maxAge
    }
    const result = await this._verifyJWT(token, this.secret, options)
    return result
  }

  static _createJWT (payload, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (error, token) => {
        if (error) reject(error)
        else resolve(token)
      })
    })
  }

  static _verifyJWT (token, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, options, (error, decoded) => {
        if (error) reject(error)
        else resolve(decoded)
      })
    })
  }
}

module.exports = JWT
