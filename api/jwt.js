const jwt = require('jsonwebtoken')
const fs = require('fs')
const config = require('../config.json')

class JWT {
  constructor () {
    this.issuer = config.jwt.issuer
    this.privkey = fs.readFileSync(config.jwt.private)
    this.publkey = fs.readFileSync(config.jwt.public)
    this.subject = config.jwt.subject
    this.algorithm = 'RS256'
    this.maxAge = config.jwt.maxAge
  }

  async createToken (payload) {
    const options = {
      algorithm: this.algorithm,
      expiresIn: this.maxAge,
      issuer: this.issuer,
      subject: this.subject
    }
    const result = await this._createJWT(payload, this.privkey, options)
    return result
  }

  async verifyToken (token) {
    const options = {
      algorithm: this.algorithm,
      issuer: this.issuer,
      subject: this.subject,
      maxAge: this.maxAge
    }
    const result = await this._verifyJWT(token, this.publkey, options)
    return result
  }

  _createJWT (payload, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (error, token) => {
        if (error) reject(error)
        else resolve(token)
      })
    })
  }

  _verifyJWT (token, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, options, (error, decoded) => {
        if (error) reject(error)
        else resolve(decoded)
      })
    })
  }
}

module.exports = new JWT()
