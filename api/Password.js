const crypto = require('crypto').createHash('sha256')
const bcrypt = require('bcrypt')

module.exports = class Password {
  static createHash (plain) {
    return crypto.update(plain).digest('hex')
  }

  static async create (plain) {
    const hash = await bcrypt.hash(this.create(plain), 12)

    return hash
  }

  static async isValid (plain, target) {
    const isEqual = await bcrypt.compare(this.create(plain), target)

    return isEqual
  }
}
