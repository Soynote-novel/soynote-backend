const crypto = require('crypto').createHash('sha256')
const bcrypt = require('bcrypt')

// private method
const createHash = (plain) => crypto.update(plain).digest('hex')

class Password {
  static async signature (plain) {
    const hash = await bcrypt.hash(createHash(plain), 12)

    return hash
  }

  static async isValid (plain, target) {
    const isEqual = await bcrypt.compare(createHash(plain), target)

    return isEqual
  }
}

module.exports = Password
